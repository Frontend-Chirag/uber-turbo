import { Redis } from "@upstash/redis";
import { AuthSessionData, AuthStep, SessionOptions } from "../types";
import crypto from 'crypto';

export class AuthSessionStore {
    private redis: Redis;
    private readonly prefix = 'auth:session:';
    private readonly ttl = 3600;

    constructor(redis: Redis) {
        this.redis = redis;
    }


    async create(data: Partial<AuthSessionData>, options?: SessionOptions): Promise<AuthSessionData> {
        const sessionId = this.generateSessionId();
        const now = Date.now();

        const session: AuthSessionData = {
            sessionId,
            visitorId: data.visitorId || '',
            ipAddress: data.ipAddress || '',
            userAgent: data.userAgent || '',
            createdAt: now,
            updatedAt: now,
            expiresAt: now + (options?.ttl || this.ttl) * 1000,

            flowType: data.flowType || 'INITIAL',
            currentStep: AuthStep.INITIAL,
            completedSteps: [],

            emailVerified: false,
            phoneVerified: false,
            termsAccepted: false,
            privacyAccepted: false,

            otpAttempts: 0,
            riskScore: 0,
            suspiciousActivity: false,

            ...data
        };

        const key = this.getKey(sessionId);

        // upstash setex
        await this.redis.setex(
            key,
            options?.ttl || this.ttl,
            JSON.stringify(session)
        );

        // Create audit log 

        await this.createAuditLog(sessionId, 'session_created', { flowType: session.flowType })

        return session;
    }

    async get(sessionId: string): Promise<AuthSessionData | null> {
        const key = this.getKey(sessionId);
        const data = await this.redis.get<string>(key);

        if (!data) return null;

        const session = JSON.parse(data) as AuthSessionData;

        // check if expired
        if (session.expiresAt < Date.now()) {
            await this.delete(sessionId);
            return null;
        }

        return session;
    }

    async update(sessionId: string, updates: Partial<AuthSessionData>): Promise<AuthSessionData | null> {
        const session = await this.get(sessionId);
        if (!session) return null;


        const updatedSession: AuthSessionData = {
            ...session,
            ...updates,
            updatedAt: Date.now()
        };

        // update completed steps
        if (updates.currentStep && !updatedSession.completedSteps.includes(updates.currentStep)) {
            updatedSession.completedSteps.push(updates.currentStep);
        }

        const key = this.getKey(sessionId);
        const ttl = Math.floor((updatedSession.expiresAt - Date.now()) / 1000);

        if (ttl > 0) {
            await this.redis.setex(key, ttl, JSON.stringify(updatedSession));
            await this.createAuditLog(sessionId, 'session_updated', { updates });
        }

        return updatedSession;
    }

    async delete(sessionId: string): Promise<void> {
        const key = this.getKey(sessionId);
        await this.redis.del(key);
        await this.createAuditLog(sessionId, 'session_deleted');
    }

    async validateOTP(sessionId: string, otp: string): Promise<boolean> {
        const session = await this.get(sessionId);
        if (!session) return false;

        // Check if OTP is expired
        if (!session.otpExpiresAt || session.otpExpiresAt < Date.now()) {
            return false;
        }

        // Verify OTP
        const otpHash = this.hashOTP(otp, sessionId);
        const isValid = otpHash === session.otpHash;

        // Update attempts
        if (!isValid) {
            await this.incrementOTPAttempts(sessionId);
        }

        return isValid;
    }

    async generateAndStoreOTP(sessionId: string): Promise<string> {
        const otp = this.generateOTP();
        const otpHash = this.hashOTP(otp, sessionId);

        await this.update(sessionId, {
            otpHash,
            otpExpiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
            lastOtpSentAt: Date.now()
        });

        return otp;
    }

    private async incrementOTPAttempts(sessionId: string): Promise<void> {
        const session = await this.get(sessionId);
        if (!session) return;

        const newAttempts = session.otpAttempts + 1;
        const updates: Partial<AuthSessionData> = { otpAttempts: newAttempts };

        // Block if too many attempts
        if (newAttempts >= 5) {
            updates.suspiciousActivity = true;
            updates.blockedUntil = Date.now() + 30 * 60 * 1000; // 30 minutes
        }

        await this.update(sessionId, updates);
    }

    private generateOTP(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    private hashOTP(otp: string, salt: string): string {
        return crypto.createHash('sha256').update(otp + salt).digest('hex');
    }

    private getKey(sessionId: string): string {
        return `${this.prefix}${sessionId}`;
    }

    private generateSessionId(): string {
        return crypto.randomBytes(32).toString('hex');
    }

    private async createAuditLog(sessionId: string, action: string, data?: any): Promise<void> {
        const logEntry = {
            sessionId,
            action,
            timestamp: Date.now(),
            data
        };

        // Upstash: Use LPUSH with expiry on the list
        const auditKey = `auth:audit:${sessionId}`;
        await this.redis.lpush(auditKey, JSON.stringify(logEntry));

        // Trim to keep only last 100 entries
        await this.redis.ltrim(auditKey, 0, 99);

        // Set expiry for audit logs (7 days)
        await this.redis.expire(auditKey, 7 * 24 * 60 * 60);
    }


}
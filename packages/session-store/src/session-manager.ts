import { Redis } from "@upstash/redis";
import { AuthSessionStore } from "./auth-sesson";
import { getRedisClient } from "./redis-client";
import { AuthSessionData, RateLimitConfig } from "./types";
import { RateLimiter } from "./rate-limiter";



export class SessionManager {
    private authStore: AuthSessionStore;
    private rateLimiter: RateLimiter;
    private redis: Redis;

    constructor(redis?: Redis) {
        this.redis = redis || getRedisClient();
        this.authStore = new AuthSessionStore(this.redis);
        this.rateLimiter = new RateLimiter(this.redis);
    }


    // Auth session methods
    async createAuthSession(data: Partial<AuthSessionData>): Promise<AuthSessionData> {
        return this.authStore.create(data);
    }

    async getAuthSession(sessionId: string): Promise<AuthSessionData | null> {
        return this.authStore.get(sessionId);
    }

    async updateAuthSession(sessionId: string, updates: Partial<AuthSessionData>): Promise<AuthSessionData | null> {
        return this.authStore.update(sessionId, updates);
    }

    async deleteAuthSession(sessionId: string): Promise<void> {
        return this.authStore.delete(sessionId);
    }

    // OTP Methods with Rate Limiting
    async sendOTP(sessionId: string, channel: 'email' | 'sms'): Promise<{
        success: boolean;
        otp?: string;
        error?: string;
    }> {
        const session = await this.getAuthSession(sessionId);
        if (!session) {
            return { success: false, error: 'Session not found' };
        }

        // Check rate limit for OTP
        const rateLimitKey = `otp:${channel}:${session.email || session.phoneNumber}`;
        const rateLimit = await this.rateLimiter.checkLimit(rateLimitKey, {
            windowMs: 60 * 1000, // 1 minute
            max: 3
        });

        if (!rateLimit.allowed) {
            return {
                success: false,
                error: `Too many OTP requests. Try again in ${Math.ceil((rateLimit.resetAt - Date.now()) / 1000)} seconds`
            };
        }

        // Check if blocked
        if (session.blockedUntil && session.blockedUntil > Date.now()) {
            return {
                success: false,
                error: 'Account temporarily blocked due to suspicious activity'
            };
        }

        const otp = await this.authStore.generateAndStoreOTP(sessionId);

        return { success: true, otp };
    }

    async verifyOTP(sessionId: string, otp: string): Promise<{
        success: boolean;
        error?: string;
    }> {
        const isValid = await this.authStore.validateOTP(sessionId, otp);

        if (!isValid) {
            return { success: false, error: 'Invalid or expired OTP' };
        }

        return { success: true };
    }


    // General Rate Limiting
    async checkRateLimit(key: string, config?: RateLimitConfig): Promise<boolean> {
        const defaultConfig: RateLimitConfig = {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100,
            keyPrefix: 'api'
        };

        const result = await this.rateLimiter.checkLimit(key, config || defaultConfig);
        return !result.allowed;
    }

    // Security Methods
    async detectSuspiciousActivity(sessionId: string): Promise<boolean> {
        const session = await this.getAuthSession(sessionId);
        if (!session) return false;

        // Check various suspicious patterns
        const checks = [
            session.otpAttempts > 3,
            session.riskScore > 0.7,
            session.suspiciousActivity,
            // Add more checks as needed
        ];

        return checks.some(check => check === true);
    }

    // Cleanup Methods - Modified for Upstash
    async cleanupExpiredSessions(): Promise<number> {
        // Since Upstash doesn't support KEYS command, we'll use a different approach
        // We'll maintain a set of active sessions
        const activeSessionsKey = 'auth:active_sessions';
        const sessionIds = await this.redis.smembers(activeSessionsKey);
        let cleaned = 0;

        for (const sessionId of sessionIds) {
            const session = await this.getAuthSession(sessionId);
            if (!session || session.expiresAt < Date.now()) {
                await this.deleteAuthSession(sessionId);
                await this.redis.srem(activeSessionsKey, sessionId);
                cleaned++;
            }
        }

        return cleaned;
    }

    // Helper method to track active sessions
    async trackActiveSession(sessionId: string): Promise<void> {
        const activeSessionsKey = 'auth:active_sessions';
        await this.redis.sadd(activeSessionsKey, sessionId);
        // Set expiry on the set (30 days)
        await this.redis.expire(activeSessionsKey, 30 * 24 * 60 * 60);
    }

}
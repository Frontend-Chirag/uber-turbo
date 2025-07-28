export enum SessionType {
    AUTH = 'auth',
    USER = 'user',
    DRIVER = 'driver',
}

export enum AuthStep {
    INITIAL = 'initial',
    EMAIL_VERIFICATION = 'email_verification',
    PHONE_VERIFICATION = 'phone_verification',
    USER_DETAILS = 'user_details',
    TERMS_ACCEPTANCE = 'terms_acceptance',
    COMPLETED = 'completed'
}

export interface AuthSessionData {
    // Session metadata
    sessionId: string;
    visitorId: string;
    deviceFingerPrint?: string;
    ipAddress: string;
    userAgent: string;
    createdAt: number;
    updatedAt: number;
    expiresAt: number;

    // Auth flow state
    flowType: string;
    currentStep: AuthStep;
    completedSteps: AuthStep[];

    // User data
    email?: string;
    emailVerified: boolean;
    phoneNumber?: string;
    phoneCountryCode?: string;
    phoneVerified: boolean;
    firstName?: string;
    lastName?: string;


    // Security
    otpAttempts: number;
    lastOtpSentAt?: number;
    otpHash?: string; // Hashed OTP
    otpExpiresAt?: number;

    // Anti-fraud
    riskScore: number;
    suspiciousActivity: boolean;
    blockedUntil?: number;

    // Terms & Conditions
    termsAccepted: boolean;
    termsAcceptedAt?: number;
    privacyAccepted: boolean;

    // Temporary data for the flow
    tempData?: Record<string, any>;
}


export interface SessionOptions {
    ttl?: number; // Time to live in seconds
    namespace?: string;
    maxAttempts?: number;
}

export interface RateLimitConfig {
    windowMs: number;
    max: number;
    keyPrefix?: string;
    skipSuccessfulRequests?: boolean;
}
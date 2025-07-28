// import { Ratelimit, type RatelimitConfig } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";
// import { keys } from "./src/keys";


// export interface SessionData<T> {
//     id: string;
//     data: T;
//     createdAt: Date;
//     expiresAt: Date;
//     visitorId: string
// };

// type SessionConfig = {
//     prefix?: string;
//     rateLimit?: {
//         windowSeconds: number;
//         maxRequests: number;
//         limiterPrefix?: 'AUTH-SESSION:' | 'USER:SESSION';
//         visitorId: string
//     };
//     encryptionSecret?: string;
// };


// export const redis = new Redis({
//     url: keys().UPSTASH_REDIS_REST_URL,
//     token: keys().UPSTASH_REDIS_REST_TOKEN,
// });

// export const createRateLimiter = (props: Omit<RatelimitConfig, 'redis'>) =>
//     new Ratelimit({
//         redis,
//         limiter: props.limiter ?? Ratelimit.slidingWindow(10, '10 s'),
//         prefix: props.prefix ?? 'rate-limit',
//     });

// export const { slidingWindow } = Ratelimit;


// export class SessionStore {
//     private static instance: SessionStore;
//     private redis: Redis;
//     private prefix: string;

//     private readonly SESSION_TTL_MS = 15 * 60 * 1000; // 15 minutes
//     private readonly BATCH_SIZE = 100

//     private readonly VISITOR_ID_PREFIX = "VISITOR:";
//     private readonly STATS_PREFIX = "STATS:";


//     private constructor(config: SessionConfig) {
//         this.redis = redis;
//         this.prefix = config.prefix ?? 'session';
//     };


//     public static getInstance(config: SessionConfig = {}): SessionStore {
//         if (!SessionStore.instance) {
//             SessionStore.instance = new SessionStore(config);
//         }
//         return SessionStore.instance;
//     };

//     async createAuthSession<T>(
//         options: {
//             id: string
//             data: T,
//             visitorId: string;
//         },
//         ttlMs = this.SESSION_TTL_MS
//     ): Promise<SessionData<T> | null> {
//         const { id, data, visitorId, } = options;

//         try {
//             const now = new Date();
//             const expiresAt = new Date(now.getTime() + ttlMs);
//             const session: SessionData<T> = {
//                 id,
//                 data,
//                 visitorId,
//                 createdAt: now,
//                 expiresAt,
//             };
//             const sessionKey = this.getSessionKey(id);
//             const sessionData = JSON.stringify(session);
//             const pipeline = this.redis.pipeline();

//             pipeline.setex(sessionKey, Math.floor(ttlMs / 1000), sessionData);
//             const userFingerPrintKey = this.getVisitorKey(visitorId);
//             pipeline.hincrby(userFingerPrintKey, this.prefix, 1);
//             pipeline.expire(userFingerPrintKey, Math.floor(this.SESSION_TTL_MS / 1000));
//             const statsKey = this.getStatsKey();
//             pipeline.hincrby(statsKey, 'totalSession', 1);
//             pipeline.hincrby(statsKey, 'activeSession', 1);
//             pipeline.expire(statsKey, 3600);
//             await pipeline.exec();
//             return session;
//         } catch (error) {
//             console.error('Error creating session:', error);
//             return null;
//         }
//     };

//     /**
//   * Get a session from Redis.
//   */
//     async getSession<T>(options: { id: string }): Promise<SessionData<T> | null> {
//         const { id } = options;

//         try {
//             const sessionKey = this.getSessionKey(id);
//             console.log(sessionKey);
//             const raw = await redis.get(sessionKey);

//             if (!raw) return null;

//             const session: SessionData<T> = raw as SessionData<T>;
//             if (new Date() > session.expiresAt) {
//                 await this.deleteSession({ id });
//                 return null;
//             }

//             // if (visitorId && session.visitorId !== visitorId) return null;

//             return session;
//         } catch (error) {
//             console.error('Error getting session:', error);
//             return null;
//         }
//     }

//     /**
//      * Update a session in Redis.
//      */
//     async updateSession<T>(options: { id: string, updatedData: T }): Promise<SessionData<T> | null> {
//         const { id, updatedData } = options;
//         try {

//             const sessionKey = this.getSessionKey(id);
//             console.log(sessionKey)
//             const session = await this.getSession({ id }) as SessionData<T>;

//             if (!session) return null;
//             session.data = { ...session.data, ...updatedData };
//             const ttl = await this.redis.ttl(sessionKey);
//             const sessionStr = JSON.stringify(session);
//             await this.redis.setex(
//                 sessionKey,
//                 ttl > 0 ? ttl : Math.floor(this.SESSION_TTL_MS / 1000),
//                 sessionStr
//             );
//             console.log('updated', sessionStr, ttl, await this.redis.setex(
//                 sessionKey,
//                 ttl > 0 ? ttl : Math.floor(this.SESSION_TTL_MS / 1000),
//                 sessionStr
//             ))
//             return session;
//         } catch (error) {
//             console.error('Error updating session:', error);
//             return null;
//         }
//     }

//     /**
//      * Delete a session from Redis.
//      */
//     async deleteSession(options: { id: string }): Promise<boolean> {
//         const { id } = options;
//         try {
//             const sessionKey = this.getSessionKey(id);
//             const session = await this.getSession({ id });
//             if (!session) return false;
//             const pipeline = this.redis.multi();
//             pipeline.del(sessionKey);
//             if (session.visitorId) {
//                 const userFingerPrintKey = this.getVisitorKey(session.visitorId);
//                 pipeline.hincrby(userFingerPrintKey, this.prefix, -1);
//             }
//             const statsKey = this.getStatsKey();
//             pipeline.hincrby(statsKey, 'activeSessions', -1);
//             pipeline.hincrby(statsKey, 'expiredSessions', 1);
//             await pipeline.exec();
//             return true;
//         } catch (error) {
//             console.error('Error deleting session:', error);
//             return false;
//         }
//     }

//     private getSessionKey(id: string) {
//         return `${this.prefix}:${id}`;
//     };

//     private getVisitorKey(visitorId: string): string {
//         return `${this.VISITOR_ID_PREFIX}${visitorId}`;
//     };

//     private getStatsKey() {
//         return `${this.STATS_PREFIX}-${this.prefix}`;
//     }

// }



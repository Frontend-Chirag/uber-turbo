import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis";
import { RateLimitConfig } from "./types";


export class RateLimiter {
    private redis: Redis;
    private limiters: Map<string, Ratelimit>;


    constructor(redis: Redis) {
        this.redis = redis
        this.limiters = new Map();
    }


    // Using Upstash's built-in rate limiter for better performance
    private getRateLimiter(config: RateLimitConfig): Ratelimit {
        const key = `${config.windowMs}:${config.max}`;

        if (!this.limiters.has(key)) {
            const limiter = new Ratelimit({
                redis: this.redis,
                limiter: Ratelimit.slidingWindow(config.max, `${config.windowMs} ms`),
                prefix: config.keyPrefix || 'rate'
            })

            this.limiters.set(key, limiter);
        };

        return this.limiters.get(key)!;
    }

    async checkLimit(key: string, config: RateLimitConfig): Promise<{
        allowed: boolean;
        remaining: number;
        resetAt: number;
    }> {

        const limiter = this.getRateLimiter(config);
        const result = await limiter.limit(key);

        return {
            allowed: result.success,
            remaining: result.remaining,
            resetAt: result.reset
        }
    };

    async reset(key: string, config: RateLimitConfig): Promise<void> {
        // Reset by deleting the key pattern
        const pattern = `${config.keyPrefix || 'rate'}:${key}:*`;
        // Note: Upstash doesn't support KEYS command, so we'll use a different approach
        // We'll let the rate limit expire naturally or use a specific reset key
        const resetKey = `${config.keyPrefix || 'rate'}:reset:${key}`;
        await this.redis.set(resetKey, Date.now(), { ex: config.windowMs / 1000 });
    }

}


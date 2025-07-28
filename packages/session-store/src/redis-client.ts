import { Redis } from "@upstash/redis";
import { keys } from "./keys";

let redisClient: Redis | null = null;

export function getRedisClient(): Redis {
    if (!redisClient) {
        redisClient = new Redis({
            url: keys().UPSTASH_REDIS_REST_URL,
            token: keys().UPSTASH_REDIS_REST_TOKEN,
        })
    };

    return redisClient;
}
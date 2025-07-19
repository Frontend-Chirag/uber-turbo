import { Hono } from "hono";

import type { AuthRequest } from "@repo/proto";
import { authClient } from "../lib/auth-client.js";
import { promisify } from "util";


const authRoutes = new Hono()
    .post("/", async (c) => {
        const body = await c.req.json<AuthRequest>();

        return new Promise((resolve) => {
            authClient.submitAuth(body, (err, resp) => {
                if (err) {
                    console.error("gRPC Error:", err);
                    return resolve(c.json({ success: false, message: "Internal server error" }, 500));
                }

                resolve(c.json(resp));
            });
        });
    })
    .get('/session/:id', async (c) => {
        const sessionId = c.req.param("id");

        return new Promise<Response>((resolve) => {
            authClient.getAuthSession({ sessionId }, (err, data) => {
                if (err) {
                    console.error("gRPC Error:", err);
                    return resolve(c.json({ success: false, message: "Internal server error" }, 500));
                }
                return resolve(c.json(data));
            });
        });
    })

export default authRoutes;
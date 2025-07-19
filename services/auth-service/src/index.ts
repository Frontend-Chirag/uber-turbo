import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { AuthServiceService } from "@repo/proto/generated/auth.js";
import { Server, ServerCredentials } from "@grpc/grpc-js"
import { authHandlers } from './client.js';

const server = new Server();

server.addService(AuthServiceService, authHandlers)

server.bindAsync("0.0.0.0:50051", ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("Failed to bind gRPC server:", err);
        process.exit(1);
      }
    
      console.log(`🟢 AuthService gRPC running at 0.0.0.0:${port}`);
})


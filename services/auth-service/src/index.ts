import { AuthServiceService, type AuthServiceServer } from "@repo/proto/generated/auth.js";
import { Server, ServerCredentials } from "@grpc/grpc-js"
import { authHandlers } from './handlers.js';
import { AuthService } from "./handlers/auth-handler.js";

const port = process.env.PORT || '50051';
const server = new Server();

const AuthService = new AuthService();

const grpcService: AuthServiceServer = {
  submit: (call, callback) => {
    const { inAuthsessionId, nextUrl, flowType, screenAnswers } = call.request;

  }
}



server.addService(AuthServiceService, grpcService)

server.bindAsync(
  `0.0.0.0:${port}`,
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error('Failed to start Auth Service server:', error);
      process.exit(1);
    }
    console.log(`Auth service running on port ${port}`);
    server.start();
  })


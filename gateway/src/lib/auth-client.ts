import { credentials } from "@grpc/grpc-js";
import { AuthServiceClient } from "@repo/proto";
import * as proto from "@repo/proto";


export const authClient = new AuthServiceClient(
    "localhost:50051",
    credentials.createInsecure()
)
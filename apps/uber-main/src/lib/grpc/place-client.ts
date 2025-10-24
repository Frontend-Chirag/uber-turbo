import pify from "pify";
import { credentials } from "@grpc/grpc-js";
import { PlaceServiceClient } from "@repo/proto/place";

const client = new PlaceServiceClient("localhost:50052", credentials.createInsecure());

export default client;

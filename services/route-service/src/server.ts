import { Server, ServerCredentials, loadPackageDefinition, Metadata, credentials, ServiceClientConstructor } from "@grpc/grpc-js";
import { RouteServiceServer, RouteServiceService } from "@repo/proto/route";
import { GetRoute } from "./handler/getRoute";
import { RoutesClient } from "@repo/proto/src/generated/google/maps/routing/v2/routes_service";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import path from 'path';


const host = "routes.googleapis.com:443";
const apiKey = process.env.GOOGLE_MAPS_API_KEY || "AIzaSyDS9iAd2O04zfaHOPZTN26E5eqva9oW864";
const fieldMask = "*";

const ssl_creds = credentials.createSsl();
const call_creds = credentials.createFromMetadataGenerator(
    function (args, callback) {
        const metadata = new Metadata();
        metadata.set('X-Goog-Api-Key', apiKey);
        metadata.set('X-Goog-Fieldmask', fieldMask);
        callback(null, metadata);
    }
);

const combinedCredentials = credentials.combineChannelCredentials(
    ssl_creds,
    call_creds
);

export const googleRouteClient = new RoutesClient(
    host,
    combinedCredentials
)


const port = process.env.PORT || '50053';

const server = new Server();

const services: RouteServiceServer = {
   getRoute: GetRoute
};

server.addService(RouteServiceService, services)

server.bindAsync(`0.0.0.0:${port}`, ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error('Failed to start Auth Service server:', error);
        process.exit(1);
    }
    console.log(`Route service running on port ${port}`);
})
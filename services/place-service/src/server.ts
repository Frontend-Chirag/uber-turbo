import { Server, ServerCredentials } from '@grpc/grpc-js';;
import { getPlace } from './handler/placeDetails';
import { PlaceServiceService, type PlaceServiceServer } from '@repo/proto/place';

const port = process.env.PORT || '50052';
const server = new Server();

const service: PlaceServiceServer = {
  
    getPlace: getPlace,
    autocomplete: () => {

    },
    textSearch: () => {

    },
    nearbySearch: () => {

    }
}


server.addService(PlaceServiceService, service);

server.bindAsync(`0.0.0.0:${port}`, ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error('Failed to start Auth Service server:', error);
        process.exit(1);
    }
    console.log(`Place service running on port ${port}`);
})
import { NextResponse, NextRequest } from 'next/server';
import { RouteServiceClient } from "@repo/proto/routes";
import { credentials } from '@grpc/grpc-js';

const routeServiceClient = new RouteServiceClient('localhost:50053', credentials.createInsecure())

export async function POST(request: NextRequest) {
    const { routes } = await request.json();

    const destinations = routes.destinations;
    const origin = routes.origin;

    return new Promise((resolve, reject) => {
        routeServiceClient.getRoute({
            routes: {
                destinations: {
                    latitude: destinations.latitude,
                    longitude: destinations.longitude
                },
                origin
            }
        }, (err, response) => {

            if (err) {
                console.log(err)
                resolve(NextResponse.json({ message: "ROUTE CUSTOM API Error" }));
            }
            const data = response;

            console.log(response)

            resolve(NextResponse.json({ data: response }));
        });
    })
}
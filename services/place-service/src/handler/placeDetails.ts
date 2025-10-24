import type { handleUnaryCall } from "@grpc/grpc-js";
import { GetPlaceRequest, GetPlaceResponse, RawPlace } from "@repo/proto/place";

import { googleClient, key, } from "../lib/client.js";
import { getPlaceIdFromCoords } from "../utils/getPlaceIdFromCoods.js";


export const getPlace: handleUnaryCall<
    GetPlaceRequest,
    GetPlaceResponse
> = async (call, callback) => {
    try {
        const { location, placeId, fields } = call.request;

        if (!location && !placeId) {
            return callback(new Error("Either location or placeId must be provided"), null);
        }
        console.log(location)

        const placeIdFromCoords = (location ? await getPlaceIdFromCoords(location) : undefined);

        if (!placeIdFromCoords) {
            return callback(new Error("Could not determine placeId"), null);
        }

        const { data } = await googleClient.placeDetails({
            params: {
                place_id: placeIdFromCoords,
                key,
                fields: fields && fields.length > 0 ? fields : [],
            },
        });

        if (!data.result) {
            return callback(new Error("Place not found"), null);
        }

        // That's it! Just return the Google response directly
        callback(null, {
            result: RawPlace.fromJSON(data.result),
            status: data.status,
        });
    } catch (error) {
        console.error("Error fetching place details:", error);
        callback(new Error("Failed to fetch place details"), null);
    }
}
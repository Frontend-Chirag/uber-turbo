import { AddressType } from "@googlemaps/google-maps-services-js";
import { googleClient, key } from "../lib/client";

interface PlaceIdCoordsProps {
    latitude: number;
    longitude: number;
    resultType?: string[]
}

export async function getPlaceIdFromCoords(location: PlaceIdCoordsProps): Promise<string | null> {
    try {
        console.log("location",location)
        const { data } = await googleClient.reverseGeocode({
            params: {
                key,
                latlng: `${location.latitude},${location.longitude}`,
            }
        });

        const result = data.results[0];
        
        console.log(result?.formatted_address)

        if (!result) return null;

        return result.place_id;
    } catch {
        return null;
    }
}
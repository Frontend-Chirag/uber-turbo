import client from "@/lib/grpc/place-client";
import { Confidence, LocationType, PudoLocation, PudoProvider, PudoSource, type Resolvers } from "../generated/server/types";
import { GetPlaceResponse } from "@repo/proto/place";


function getPlaceAsync(location: { latitude: number; longitude: number }, fields: string[] = [], placeId?: string) {
  return new Promise<GetPlaceResponse>((resolve, reject) => {
    client.getPlace({
      location,
      placeId: "",
      fields: []
    }, (err, res) => {
      console.log(err)
      if (err) return reject(err);
      resolve(res);
    });
  });
}





const resolvers: Resolvers = {
  Query: {
    pudoResolveLocation: async (_, args) => {

      const { latitude, longitude } = args;

      console.log(latitude, longitude)

      if (!latitude || !longitude) throw new Error("Invalid coordinates");

      try {

        const { result } = await getPlaceAsync({
          latitude,
          longitude
        });


        if (!result) throw new Error("Place not found");

        // const res = reverseResponse.results[0]
        console.log(result)

        const data: PudoLocation = {
          id: result.placeId,
          source: PudoSource.Manual,
          provider: PudoProvider.GooglePlaces,
          type: LocationType.Location,
          tag: null,
          categories: ["saved_place"],
          confidence: Confidence.High,
          coordinate: { latitude, longitude },
          addressLine1: result.name,
          addressLine2: result.formattedAddress || result.vicinity,
          savedPlacesMeta: null,
          timeZone: null,
          airportTerminals: null,
          reserveAirportPickupData: null,
        };

        return data;
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message);
      }
    }
  },
  Mutation: {
    _empty: () => "GraphQL server is running 🚀",
  },
};

export default resolvers;

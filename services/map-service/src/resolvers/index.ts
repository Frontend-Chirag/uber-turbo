import { googleProvider } from "../providers/google.js";
import { type Resolvers, type MutationPudoResolveLocationArgs, type Maybe, type PudoLocation, PudoSource, PudoProvider, LocationType, Confidence } from "@repo/graphql/server";


export const resolvers: Resolvers = {
    Mutation: {
        pudoResolveLocation: async (_, args: MutationPudoResolveLocationArgs):
            Promise<Maybe<PudoLocation>> => {
            const { id, source, provider = 'google_places', latitude, longitude, includeTimezone, includeAirportTerminals, includeRAPUStatus } = args;

            if (id) {
                // GET PERFROM CACHE
            }

            if (latitude && longitude) {
                const reverse = await googleProvider.reverseGeoCode({
                    latlng: `${latitude},${longitude}`,
                    enable_address_descriptor: true,
                });

                console.log(reverse.data.results[0].formatted_address)
            
                const placeDetails = await googleProvider.placeDetails({
                    place_id: reverse.data.results[0].place_id,
                });

                const result = placeDetails.data.result                

                if (!result) return null;
                console.log(result.formatted_address);
                console.log(result.name);
                console.log(result)

                return {
                    id: reverse.data.results[0].place_id,
                    source: PudoSource.Manual, // ✅ cast
                    provider: PudoProvider.GooglePlaces,
                    type: LocationType.Location,
                    tag: null,
                    categories: ['saved_place'],
                    confidence: Confidence.High,
                    coordinate: { latitude, longitude },
                    addressLine1: result.name,
                    addressLine2: result.formatted_address,
                    savedPlacesMeta: null
                }
            }

            return null;
        }
    }
    // Query: {
    //     pudoResolveLocation: async (
    //         _: {},
    //         args: ServerTypes.QueryPudoResolveLocationArgs
    //     ): Promise<Maybe<ServerTypes.PudoLocation>> => {
    //         const { id, source, provider = 'google_places', latitude, longitude, includeTimezone, includeAirportTerminals, includeRAPUStatus } = args;

    //         if (id) {
    //             // GET PERFROM CACHE
    //         }

    //         if (latitude && longitude) {
    //             const reverse = await googleProvider.reverseGeoCode({
    //                 latlng: `${latitude},${longitude}`,
    //                 enable_address_descriptor: true,
    //             });



    //             console.log(reverse.data.address_descriptor.areas[0].displayName)
    //             console.log(reverse.data.results[0].geometry)
    //             console.log(reverse.data.results[0].partial_match)
    //             console.log(reverse.data.results[0].formatted_address)
    //             console.log(reverse.data.results[0].types)
    //             console.log(reverse.data.results[0].geometry.location_type)
    //             console.log(reverse.data.results[0].address_components[0].short_name)

    //             const placeDetails = await googleProvider.placeDetails({
    //                 place_id: reverse.data.results[0].place_id,
    //                 fields: ['name', 'formatted_address', 'address_components']
    //             });

    //             const result = placeDetails.data.result

    //             return {
    //                 id: `saved-${Date.now()}`,
    //                 source: PudoSourceEnum.SEARCH as ServerTypes.PudoSource, // ✅ cast
    //                 provider: PudoProviderEnum.google_places as ServerTypes.PudoProvider,
    //                 type: LocationTypeEnum.LOCATION as ServerTypes.LocationType,
    //                 tag: null,
    //                 categories: ['saved_place'],
    //                 confidence: ConfidenceEnum.HIGH as ServerTypes.Confidence,
    //                 coordinate: { latitude: 0, longitude: 0 },
    //                 addressLine1: 'chirag',
    //                 addressLine2: 'chirag',
    //                 savedPlacesMeta: null
    //             }
    //         }

    //         return null;
    //     }
    // }
}
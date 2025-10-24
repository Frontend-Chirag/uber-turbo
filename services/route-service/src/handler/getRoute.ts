import { handleUnaryCall } from "@grpc/grpc-js";
import { GetRouteRequest, GetRouteResponse } from "@repo/proto/route";
import { ComputeRoutesRequest, } from "@repo/proto/src/generated/google/maps/routing/v2/routes_service";
import { Waypoint, } from "@repo/proto/src/generated/google/maps/routing/v2/waypoint";
import { RouteTravelMode } from "@repo/proto/src/generated/google/maps/routing/v2/route_travel_mode";
import { googleRouteClient } from "../server";
import { Location } from "@repo/proto/src/generated/google/maps/routing/v2/location";
import { RoutingPreference } from "@repo/proto/src/generated/google/maps/routing/v2/routing_preference";
import { PolylineEncoding, PolylineQuality } from "@repo/proto/src/generated/google/maps/routing/v2/polyline";
import { Units } from "@repo/proto/src/generated/google/maps/routing/v2/units";
import { TrafficModel } from "@repo/proto/src/generated/google/maps/routing/v2/traffic_model";

export const GetRoute: handleUnaryCall<
    GetRouteRequest,
    GetRouteResponse
> = async (call, callback) => {
    try {
        const { routes } = call.request;

        if (!routes?.destinations || !routes?.origin) {
            return callback(new Error("Invalid request"), null)
        }

        const request: ComputeRoutesRequest = {
            origin: {
                location: {
                    heading: RouteTravelMode.DRIVE,
                    latLng: {
                        latitude: routes?.origin?.latitude ?? 0,
                        longitude: routes?.origin?.longitude ?? 0,
                    },
                },
                via: false,
                vehicleStopover: false,
                sideOfRoad: false
            },
            destination: {
                location: {
                    heading: RouteTravelMode.DRIVE,
                    latLng: {
                        latitude: routes?.destinations?.latitude ?? 0,
                        longitude: routes?.destinations?.longitude ?? 0,
                    },
                },
                via: false,
                vehicleStopover: false,
                sideOfRoad: false
            },
            travelMode: RouteTravelMode.DRIVE,
            departureTime: undefined,
            arrivalTime: undefined,
            intermediates: [],
            routingPreference: RoutingPreference.ROUTING_PREFERENCE_UNSPECIFIED,
            polylineQuality: PolylineQuality.POLYLINE_QUALITY_UNSPECIFIED,
            polylineEncoding: PolylineEncoding.POLYLINE_ENCODING_UNSPECIFIED,
            computeAlternativeRoutes: false,
            routeModifiers: undefined,
            languageCode: "",
            regionCode: "",
            units: Units.UNITS_UNSPECIFIED,
            optimizeWaypointOrder: false,
            requestedReferenceRoutes: [],
            extraComputations: [],
            trafficModel: TrafficModel.TRAFFIC_MODEL_UNSPECIFIED,
            transitPreferences: undefined
        };



        googleRouteClient.computeRoutes(request, (err, response) => {
            if (err) {
                console.error("Google Maps API error:", err);
                callback(err, null);
                return;
            }


            const route = response?.routes?.[0];
            const leg = route?.legs?.[0];

            const result: GetRouteResponse = {
                distance: route?.distanceMeters ?? 0,
                eta: leg?.duration?.seconds ?? 0,
                legs: leg
                    ? [
                        {
                            distance: leg.distanceMeters ?? 0,
                            duration: leg.duration?.seconds ?? 0,
                        },
                    ]
                    : [],
                polyline: route?.polyline?.encodedPolyline ?? "",
            };
            callback(null, result);
        })

    } catch (error) {
        console.error("Internal server error:", error);
        callback(error as any, null);
    }
}
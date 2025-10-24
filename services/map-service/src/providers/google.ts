import { Client } from "@googlemaps/google-maps-services-js";
import type {
    PlaceDetailsRequest,
    PlaceDetailsResponse,
    PlacesNearbyRequest,
    PlacesNearbyResponse,
    ReverseGeocodeRequest,
    ReverseGeocodeResponse,
    TextSearchRequest,
    TextSearchResponse
} from "@googlemaps/google-maps-services-js";



class GoogleProvider {
    private static instance: GoogleProvider;
    // private client: Client;
    private client: Client;
    private apikey: string;


    constructor() {
        this.client = new Client({});
        this.apikey = process.env.GOOGLE_PLACES_API_KEY || "AIzaSyDS9iAd2O04zfaHOPZTN26E5eqva9oW864";

        if (!this.apikey) {
            throw new Error('GOOGLE_PLACES_API_KEY environment variable is required');
        }
    }

    public static async getInstance(): Promise<GoogleProvider> {
        if (!GoogleProvider.instance) {
            GoogleProvider.instance = new GoogleProvider();
        }
        return GoogleProvider.instance;
    }

    public async reverseGeoCode(props: Omit<ReverseGeocodeRequest['params'], "key">): Promise<ReverseGeocodeResponse> {
        try {
            const response = await this.client.reverseGeocode({
                params: {
                    key: this.apikey,
                    ...props
                },
            });

            return response;
        } catch (error) {
            console.error('Geocoding failed:', error);
            throw new Error(`Geocoding failed: ${error}`);
        }
    }

    public async placeDetails(props: Omit<PlaceDetailsRequest['params'], "key">): Promise<PlaceDetailsResponse> {
        try {
            const response = this.client.placeDetails({
                params: {
                    key: this.apikey,
                    ...props,
                }
            });
            return response;
        } catch (error) {
            console.error('Place details failed:', error);
            throw new Error(`Place details failed: ${error}`);
        }
    }


    // Text Search: Search for places by text query
    public async textSearch(props: Omit<TextSearchRequest['params'], "key">): Promise<TextSearchResponse> {

        try {
            const response = await this.client.textSearch({
                params: {
                    key: this.apikey,
                    ...props
                }
            });
            return response;
        } catch (error) {
            console.error('Text search failed:', error);
            throw new Error(`Text search failed: ${error}`);
        }
    }

    // Nearby Search: Find places near a location
    public async nearbySearch(props: Omit<PlacesNearbyRequest['params'], "key">): Promise<PlacesNearbyResponse> {
        try {
            const response = await this.client.placesNearby({
                params: {
                    key: this.apikey,
                    ...props
                }
            });
            return response;
        } catch (error) {
            console.error('Nearby search failed:', error);
            throw new Error(`Nearby search failed: ${error}`);
        }
    }


    // Helper method to extract clean address from geocoding result
    public static extractCleanAddress(geocodeResult: any): {
        addressLine1: string;
        addressLine2: string;
        city?: string;
        state?: string;
        country?: string;
        postalCode?: string;
    } {
        if (!geocodeResult || !geocodeResult.address_components) {
            return {
                addressLine1: 'Unknown location',
                addressLine2: geocodeResult?.formatted_address || 'Unknown address'
            };
        }

        const components = geocodeResult.address_components;

        // Extract different address components
        const getComponent = (types: string[]) => {
            const component = components.find((comp: any) =>
                comp.types.some((type: string) => types.includes(type))
            );
            return component?.long_name || '';
        };

        const streetNumber = getComponent(['street_number']);
        const route = getComponent(['route']);
        const locality = getComponent(['locality']);
        const adminArea1 = getComponent(['administrative_area_level_1']);
        const country = getComponent(['country']);
        const postalCode = getComponent(['postal_code']);

        // Try to create a meaningful primary address
        let addressLine1 = '';
        if (streetNumber && route) {
            addressLine1 = `${streetNumber} ${route}`;
        } else if (route) {
            addressLine1 = route;
        } else if (locality) {
            addressLine1 = locality;
        } else {
            addressLine1 = geocodeResult.formatted_address.split(',')[0] || 'Unknown';
        }

        return {
            addressLine1: addressLine1.trim(),
            addressLine2: geocodeResult.formatted_address,
            city: locality,
            state: adminArea1,
            country,
            postalCode
        };
    }



};


export const googleProvider = new GoogleProvider()
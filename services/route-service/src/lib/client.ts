import { Client } from '@googlemaps/google-maps-services-js';

export const key = process.env.GOOGLE_MAPS_API_KEY ||  "AIzaSyDS9iAd2O04zfaHOPZTN26E5eqva9oW864";

export const googleClient = new Client({});

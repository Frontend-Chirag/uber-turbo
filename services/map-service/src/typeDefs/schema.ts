export const typeDefs = `
  enum PickupOrDropoff { PICKUP DROP_OFF}
  enum PudoSource { SEARCH MANUAL SAVED AUTOCOMPLETE}
  enum PudoProvider { google_places uber_places }
  enum LocationType { LOCATION ADDRESS POI AIRPORT }
  enum Confidence { LOW MEDIUM HIGH }

  type Coordinate { latitude: Float! longitude: Float! }
  type CoordinateRefined { pickup: Coordinate dropoff: Coordinate }
  type SavedPlacesMeta  { airline: String logoUrl: String terminals: [PudoLocation] }
  type AirportTerminal { airline: String logoUrl: String terminals: [PudoLocation] }
  type ReserveAirportPickupData { airportCode: String enabled: Boolean }

  type PudoLocation {
   id: ID!
   source: PudoSource
   provider: PudoProvider
   type: LocationType
   tag: String
   categories: [String]
   confidence: Confidence
   coordinate: Coordinate
   coordinateRefined: CoordinateRefined
   addressLine1: String
   addressLine2: String
   savedPlacesMeta: SavedPlacesMeta
   timeZone: String
   airportTerminals: AirportTerminal
   reserveAirportPickupData: ReserveAirportPickupData
  }

  input CoordinateInput {
     latitude: Float!
     longitude: Float!
  }

  input PudoInput { id: String provider: PudoProvider coordinate: CoordinateInput addressLine1: String addressLine2: String }

  type Query {
   pudoLocationSearch(query: String!, latitude: Float, longitude: Float, type: PickupOrDropoff!, isUserTiggeredFallback: Boolean = false, limit: Int = 5 ): [PudoLocation!]!
   pudoResolveLocation(id: String, provider: PudoProvider, source: PudoSource, latitude: Float, longitude: Float, includeAirportTerminals: Boolean = false, includeRAPUStatus: Boolean = false, includeTimezone: Boolean = false): PudoLocation
  }


  type Mutation {
   savePlace(userId: ID!, label: String!, location: PudoInput!): PudoLocation
  }
`;



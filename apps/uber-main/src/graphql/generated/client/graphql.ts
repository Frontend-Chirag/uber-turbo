/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AirportTerminal = {
  __typename?: 'AirportTerminal';
  airline?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  terminals?: Maybe<Array<Maybe<PudoLocation>>>;
};

export enum Confidence {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type Coordinate = {
  __typename?: 'Coordinate';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type CoordinateInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CoordinateRefined = {
  __typename?: 'CoordinateRefined';
  dropoff?: Maybe<Coordinate>;
  pickup?: Maybe<Coordinate>;
};

export enum LocationType {
  Address = 'ADDRESS',
  Airport = 'AIRPORT',
  Location = 'LOCATION',
  Poi = 'POI'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
};

export enum PickupOrDropoff {
  DropOff = 'DROP_OFF',
  Pickup = 'PICKUP'
}

export type PudoInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  coordinate?: InputMaybe<CoordinateInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<PudoProvider>;
};

export type PudoLocation = {
  __typename?: 'PudoLocation';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  airportTerminals?: Maybe<AirportTerminal>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  confidence?: Maybe<Confidence>;
  coordinate?: Maybe<Coordinate>;
  coordinateRefined?: Maybe<CoordinateRefined>;
  id: Scalars['ID']['output'];
  provider?: Maybe<PudoProvider>;
  reserveAirportPickupData?: Maybe<ReserveAirportPickupData>;
  savedPlacesMeta?: Maybe<SavedPlacesMeta>;
  source?: Maybe<PudoSource>;
  tag?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LocationType>;
};

export enum PudoProvider {
  GooglePlaces = 'google_places',
  UberPlaces = 'uber_places'
}

export enum PudoSource {
  Autocomplete = 'AUTOCOMPLETE',
  Manual = 'MANUAL',
  Saved = 'SAVED',
  Search = 'SEARCH'
}

export type Query = {
  __typename?: 'Query';
  pudoLocationSearch: Array<PudoLocation>;
  pudoResolveLocation?: Maybe<PudoLocation>;
  savePlace?: Maybe<PudoLocation>;
};


export type QueryPudoLocationSearchArgs = {
  isUserTiggeredFallback?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  query: Scalars['String']['input'];
  type: PickupOrDropoff;
};


export type QueryPudoResolveLocationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  includeAirportTerminals?: InputMaybe<Scalars['Boolean']['input']>;
  includeRAPUStatus?: InputMaybe<Scalars['Boolean']['input']>;
  includeTimezone?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  provider?: InputMaybe<PudoProvider>;
  source?: InputMaybe<PudoSource>;
};


export type QuerySavePlaceArgs = {
  label: Scalars['String']['input'];
  location: PudoInput;
  userId: Scalars['ID']['input'];
};

export type ReserveAirportPickupData = {
  __typename?: 'ReserveAirportPickupData';
  airportCode?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type SavedPlacesMeta = {
  __typename?: 'SavedPlacesMeta';
  airline?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  terminals?: Maybe<Array<Maybe<PudoLocation>>>;
};

export type PudoResolveLocationQueryVariables = Exact<{
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<PudoSource>;
  includeAirportTerminals?: InputMaybe<Scalars['Boolean']['input']>;
  includeRAPUStatus?: InputMaybe<Scalars['Boolean']['input']>;
  includeTimezone?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<PudoProvider>;
}>;


export type PudoResolveLocationQuery = { __typename?: 'Query', pudoResolveLocation?: { __typename?: 'PudoLocation', id: string, addressLine1?: string | null, addressLine2?: string | null, source?: PudoSource | null, provider?: PudoProvider | null, coordinate?: { __typename?: 'Coordinate', latitude: number, longitude: number } | null } | null };


export const PudoResolveLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PudoResolveLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PudoSource"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeAirportTerminals"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeRAPUStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTimezone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PudoProvider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pudoResolveLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeAirportTerminals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeAirportTerminals"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeRAPUStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeRAPUStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeTimezone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTimezone"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"coordinate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]} as unknown as DocumentNode<PudoResolveLocationQuery, PudoResolveLocationQueryVariables>;
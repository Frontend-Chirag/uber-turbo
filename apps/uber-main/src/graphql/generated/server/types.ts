import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AirportTerminal: ResolverTypeWrapper<AirportTerminal>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Confidence: Confidence;
  Coordinate: ResolverTypeWrapper<Coordinate>;
  CoordinateInput: CoordinateInput;
  CoordinateRefined: ResolverTypeWrapper<CoordinateRefined>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LocationType: LocationType;
  Mutation: ResolverTypeWrapper<{}>;
  PickupOrDropoff: PickupOrDropoff;
  PudoInput: PudoInput;
  PudoLocation: ResolverTypeWrapper<PudoLocation>;
  PudoProvider: PudoProvider;
  PudoSource: PudoSource;
  Query: ResolverTypeWrapper<{}>;
  ReserveAirportPickupData: ResolverTypeWrapper<ReserveAirportPickupData>;
  SavedPlacesMeta: ResolverTypeWrapper<SavedPlacesMeta>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AirportTerminal: AirportTerminal;
  Boolean: Scalars['Boolean']['output'];
  Coordinate: Coordinate;
  CoordinateInput: CoordinateInput;
  CoordinateRefined: CoordinateRefined;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PudoInput: PudoInput;
  PudoLocation: PudoLocation;
  Query: {};
  ReserveAirportPickupData: ReserveAirportPickupData;
  SavedPlacesMeta: SavedPlacesMeta;
  String: Scalars['String']['output'];
};

export type AirportTerminalResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirportTerminal'] = ResolversParentTypes['AirportTerminal']> = {
  airline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminals?: Resolver<Maybe<Array<Maybe<ResolversTypes['PudoLocation']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordinate'] = ResolversParentTypes['Coordinate']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinateRefinedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoordinateRefined'] = ResolversParentTypes['CoordinateRefined']> = {
  dropoff?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  pickup?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PudoLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PudoLocation'] = ResolversParentTypes['PudoLocation']> = {
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airportTerminals?: Resolver<Maybe<ResolversTypes['AirportTerminal']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  confidence?: Resolver<Maybe<ResolversTypes['Confidence']>, ParentType, ContextType>;
  coordinate?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  coordinateRefined?: Resolver<Maybe<ResolversTypes['CoordinateRefined']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['PudoProvider']>, ParentType, ContextType>;
  reserveAirportPickupData?: Resolver<Maybe<ResolversTypes['ReserveAirportPickupData']>, ParentType, ContextType>;
  savedPlacesMeta?: Resolver<Maybe<ResolversTypes['SavedPlacesMeta']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['PudoSource']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['LocationType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pudoLocationSearch?: Resolver<Array<ResolversTypes['PudoLocation']>, ParentType, ContextType, RequireFields<QueryPudoLocationSearchArgs, 'isUserTiggeredFallback' | 'limit' | 'query' | 'type'>>;
  pudoResolveLocation?: Resolver<Maybe<ResolversTypes['PudoLocation']>, ParentType, ContextType, RequireFields<QueryPudoResolveLocationArgs, 'includeAirportTerminals' | 'includeRAPUStatus' | 'includeTimezone'>>;
  savePlace?: Resolver<Maybe<ResolversTypes['PudoLocation']>, ParentType, ContextType, RequireFields<QuerySavePlaceArgs, 'label' | 'location' | 'userId'>>;
};

export type ReserveAirportPickupDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReserveAirportPickupData'] = ResolversParentTypes['ReserveAirportPickupData']> = {
  airportCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedPlacesMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavedPlacesMeta'] = ResolversParentTypes['SavedPlacesMeta']> = {
  airline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminals?: Resolver<Maybe<Array<Maybe<ResolversTypes['PudoLocation']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AirportTerminal?: AirportTerminalResolvers<ContextType>;
  Coordinate?: CoordinateResolvers<ContextType>;
  CoordinateRefined?: CoordinateRefinedResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PudoLocation?: PudoLocationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReserveAirportPickupData?: ReserveAirportPickupDataResolvers<ContextType>;
  SavedPlacesMeta?: SavedPlacesMetaResolvers<ContextType>;
};


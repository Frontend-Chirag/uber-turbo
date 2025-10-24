/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query PudoResolveLocation($latitude: Float, $longitude: Float, $source: PudoSource, $includeAirportTerminals: Boolean, $includeRAPUStatus: Boolean, $includeTimezone: Boolean, $id: String, $provider: PudoProvider) {\n  pudoResolveLocation(\n    latitude: $latitude\n    longitude: $longitude\n    source: $source\n    includeAirportTerminals: $includeAirportTerminals\n    includeRAPUStatus: $includeRAPUStatus\n    includeTimezone: $includeTimezone\n    id: $id\n    provider: $provider\n  ) {\n    id\n    addressLine1\n    addressLine2\n    coordinate {\n      latitude\n      longitude\n    }\n    source\n    provider\n  }\n}": typeof types.PudoResolveLocationDocument,
};
const documents: Documents = {
    "query PudoResolveLocation($latitude: Float, $longitude: Float, $source: PudoSource, $includeAirportTerminals: Boolean, $includeRAPUStatus: Boolean, $includeTimezone: Boolean, $id: String, $provider: PudoProvider) {\n  pudoResolveLocation(\n    latitude: $latitude\n    longitude: $longitude\n    source: $source\n    includeAirportTerminals: $includeAirportTerminals\n    includeRAPUStatus: $includeRAPUStatus\n    includeTimezone: $includeTimezone\n    id: $id\n    provider: $provider\n  ) {\n    id\n    addressLine1\n    addressLine2\n    coordinate {\n      latitude\n      longitude\n    }\n    source\n    provider\n  }\n}": types.PudoResolveLocationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PudoResolveLocation($latitude: Float, $longitude: Float, $source: PudoSource, $includeAirportTerminals: Boolean, $includeRAPUStatus: Boolean, $includeTimezone: Boolean, $id: String, $provider: PudoProvider) {\n  pudoResolveLocation(\n    latitude: $latitude\n    longitude: $longitude\n    source: $source\n    includeAirportTerminals: $includeAirportTerminals\n    includeRAPUStatus: $includeRAPUStatus\n    includeTimezone: $includeTimezone\n    id: $id\n    provider: $provider\n  ) {\n    id\n    addressLine1\n    addressLine2\n    coordinate {\n      latitude\n      longitude\n    }\n    source\n    provider\n  }\n}"): (typeof documents)["query PudoResolveLocation($latitude: Float, $longitude: Float, $source: PudoSource, $includeAirportTerminals: Boolean, $includeRAPUStatus: Boolean, $includeTimezone: Boolean, $id: String, $provider: PudoProvider) {\n  pudoResolveLocation(\n    latitude: $latitude\n    longitude: $longitude\n    source: $source\n    includeAirportTerminals: $includeAirportTerminals\n    includeRAPUStatus: $includeRAPUStatus\n    includeTimezone: $includeTimezone\n    id: $id\n    provider: $provider\n  ) {\n    id\n    addressLine1\n    addressLine2\n    coordinate {\n      latitude\n      longitude\n    }\n    source\n    provider\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
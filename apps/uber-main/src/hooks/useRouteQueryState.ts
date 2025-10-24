import { createParser, useQueryStates } from "nuqs";

/**
 * Type representing route query data for pickup/dropoff.
 */
export interface RouteQueryData {
  id: string;
  addressLine1: string;
  addressLine2: string;
  source: string;
  provider: string;
  latitude: number;
  longitude: number;
}

/**
 * Custom parser for encoding/decoding RouteQueryData as URI components.
 */
const routeQueryParser = createParser<RouteQueryData | null>({
  parse: (value) => {
    if (!value) return null;
    try {
      return JSON.parse(decodeURIComponent(decodeURIComponent(value)));
    } catch (err) {
      console.error("Failed to parse RouteQueryData:", err);
      return null;
    }
  },
  serialize: (value) => {
    if (!value) return "";
    const json = JSON.stringify(value);
    return encodeURIComponent(encodeURIComponent(json));
  },
});

/**
 * Manages pickup and dropoff query states using nuqs.
 */
export const useRouteQueryState = () => {
  const [queryState, setQueryState] = useQueryStates({
    pickup: routeQueryParser.withOptions({ history: "push" }),
    dropoff: routeQueryParser.withOptions({ history: "push" }),
  });

  return {
    pickupQuery: queryState.pickup,
    dropoffQuery: queryState.dropoff,
    setQueryState,
  };
};

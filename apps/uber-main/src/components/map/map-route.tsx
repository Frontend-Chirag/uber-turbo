"use client";

import {
  PudoResolveLocationDocument,
  PudoResolveLocationQuery,
  PudoResolveLocationQueryVariables,
  PudoSource,
} from "@/graphql/generated/client/graphql";

import { useRouteQueryState } from "@/hooks/useRouteQueryState";
import { useMapStore } from "@/stores/mapStore";
import { loadLibrary } from "@/utils/google";

import { useQuery } from "@apollo/client/react";
import {
  FloatingMarker,
  FLOATING_SIZE,
  FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS,
} from "@repo/design-system/components/ui/floating-marker";

import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

// Type for route information
interface RouteData {
  distance: number;
  eta: number;
  legs: Array<{ distance: number; duration: number }>;
}

/**
 * Renders the route view on the map.
 * Shows pickup & dropoff markers and draws the route between them.
 */
export default function MapRoute() {
  const { map } = useMapStore();
  const { pickupQuery, dropoffQuery } = useRouteQueryState();

  const pickupMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const dropoffMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const routeLineRef = useRef<google.maps.Polyline | null>(null);

  const [routeData, setRouteData] = useState<RouteData | null>(null);


  /**
   * Helper — creates a FloatingMarker element for pickup/dropoff.
   */
  const createMarkerContent = (size: FLOATING_SIZE, label: string) => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(
      <FloatingMarker
        anchorPosition={{
          position: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topRight,
          offset: 0,
        }}
        label={label}
        size={size}
      />
    );
    return container;
  };

  /**
   * Add pickup marker when query state updates.
   */
  useEffect(() => {
    if (!map || !pickupQuery?.latitude || !pickupQuery?.longitude) return;

    let marker: google.maps.marker.AdvancedMarkerElement | null = null;

    (async () => {
      const { AdvancedMarkerElement } = await loadLibrary("marker");
      marker = new AdvancedMarkerElement({
        map,
        position: { lat: pickupQuery.latitude, lng: pickupQuery.longitude },
        content: createMarkerContent(FLOATING_SIZE["x-small-circle"], "Pickup"),
      });
      pickupMarkerRef.current = marker;
    })();

    return () => {
      if (marker) marker.map = null;
      pickupMarkerRef.current = null;
    };
  }, [map, pickupQuery?.latitude, pickupQuery?.longitude]);

  /**
   * Add dropoff marker when query state updates.
   */
  useEffect(() => {
    if (!map || !dropoffQuery?.latitude || !dropoffQuery?.longitude) return;

    let marker: google.maps.marker.AdvancedMarkerElement | null = null;

    (async () => {
      const { AdvancedMarkerElement } = await loadLibrary("marker");
      marker = new AdvancedMarkerElement({
        map,
        position: { lat: dropoffQuery.latitude, lng: dropoffQuery.longitude },
        content: createMarkerContent(FLOATING_SIZE["x-small-square"], "Dropoff"),
      });
      dropoffMarkerRef.current = marker;
    })();

    return () => {
      if (marker) marker.map = null;
      dropoffMarkerRef.current = null;
    };
  }, [map, dropoffQuery?.latitude, dropoffQuery?.longitude]);

  /**
   * Fetch and render the route polyline when both points are available.
   */
  useEffect(() => {
    if (
      !map ||
      !pickupQuery?.latitude ||
      !pickupQuery?.longitude ||
      !dropoffQuery?.latitude ||
      !dropoffQuery?.longitude
    )
      return;

    const drawRoute = async () => {
      // Clear any existing polyline
      routeLineRef.current?.setMap(null);

      try {
        const { encoding: { decodePath } } =
          (await google.maps.importLibrary("geometry")) as google.maps.GeometryLibrary;

        const response = await fetch("/go/custom-api/navigation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            routes: {
              origin: {
                latitude: pickupQuery.latitude,
                longitude: pickupQuery.longitude,
              },
              destinations: {
                latitude: dropoffQuery.latitude,
                longitude: dropoffQuery.longitude,
              },
            },
          }),
        });

        const { data } = await response.json();
        if (!data?.polyline) return;

        // Store route details
        setRouteData({
          distance: data.distance,
          eta: data.eta,
          legs: data.legs || [],
        });

        const decodedPath = decodePath(data.polyline);

        // Draw polyline on map
        const polyline = new google.maps.Polyline({
          path: decodedPath,
          geodesic: true,
          strokeColor: "#000",
          strokeOpacity: 1,
          strokeWeight: 3,
          map,
        });

        routeLineRef.current = polyline;

        // Fit map bounds to route
        const bounds = new google.maps.LatLngBounds();
        decodedPath.forEach((point) => bounds.extend(point));


        map.fitBounds(bounds, {
          top: 100,
          bottom: 100,
          left: 100,
          right: 100
        });
      } catch (error) {
        console.error("Error fetching or drawing route:", error);
      }
    };

    drawRoute();

    return () => {
      routeLineRef.current?.setMap(null);
      routeLineRef.current = null;
    };
  }, [
    map,
    pickupQuery?.latitude,
    pickupQuery?.longitude,
    dropoffQuery?.latitude,
    dropoffQuery?.longitude,
  ]);

  /**
   * Overlay showing route summary.
   */
  return (
    <>
      {routeData && (
        <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-uber-medium text-lg mb-2">Route Information</h3>

          <div className="space-y-2">
            <div>
              <span className="font-uber-medium">Distance:</span>{" "}
              <span>{(routeData.distance / 1000).toFixed(2)} km</span>
            </div>
            <div>
              <span className="font-uber-medium">ETA:</span>{" "}
              <span>{Math.round(routeData.eta / 60)} minutes</span>
            </div>
            {routeData.legs.length > 0 && (
              <div>
                <span className="font-uber-medium">Segments:</span>{" "}
                <span>{routeData.legs.length}</span>
              </div>
            )}
          </div>

          {/* Detailed segment info (optional) */}
          {routeData.legs.length > 0 && (
            <div className="mt-4 max-h-60 overflow-y-auto">
              <h4 className="font-uber-medium mb-2">Route Segments:</h4>
              {routeData.legs.map((leg, idx) => (
                <div key={idx} className="text-sm mb-2 pb-2 border-b border-gray-200">
                  <div className="font-medium">Segment {idx + 1}</div>
                  <div className="text-gray-600">
                    Distance: {(leg.distance / 1000).toFixed(2)} km
                  </div>
                  <div className="text-gray-600">
                    Duration: {Math.round(leg.duration / 60)} min
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

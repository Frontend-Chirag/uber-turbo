"use client";

import { useEffect, useCallback } from "react";
import { Button } from "@repo/design-system/components/ui/button";
import { Heading, HeadingLevel } from "@repo/design-system/components/ui/heading-level";
import { Skeleton } from "@repo/design-system/components/ui/skeleton";
import { useQuery } from "@apollo/client/react";
import { useMapStore } from "@/stores/mapStore";
import { usePreserveQueryRouter } from "@/utils/navigation";
import { RouteQueryData, useRouteQueryState } from "@/hooks/useRouteQueryState";

import {
  PudoResolveLocationDocument,
  PudoResolveLocationQuery,
  PudoResolveLocationQueryVariables,
  PudoSource,
} from "@/graphql/generated/client/graphql";

interface SetPinPageProps {
  type: "pickup" | "dropoff";
}

export const SetPinPage = ({ type }: SetPinPageProps) => {
  const { map } = useMapStore();
  const { setQueryState } = useRouteQueryState();
  const { push } = usePreserveQueryRouter();

  const isPickup = type === "pickup";

  const { data, loading, refetch } = useQuery<
    PudoResolveLocationQuery,
    PudoResolveLocationQueryVariables
  >(PudoResolveLocationDocument, {
    variables: {
      latitude: 0,
      longitude: 0,
      source: PudoSource.Manual,
      includeAirportTerminals: false,
      includeRAPUStatus: false,
      includeTimezone: false,
    },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  /** Fetch location data whenever map center changes */
  const handleLocationResolve = useCallback(async () => {
    if (!map) return;
    const center = map.getCenter();
    if (!center) return;

    try {
      await refetch({
        latitude: center.lat(),
        longitude: center.lng(),
        source: PudoSource.Manual,
        includeAirportTerminals: false,
        includeRAPUStatus: false,
        includeTimezone: false,
      });
    } catch (err) {
      console.error("❌ Failed to resolve location:", err);
    }
  }, [map, refetch]);

  /** Initial zoom and first location resolve */
  useEffect(() => {
    if (!map) return;
    map.setZoom(16);
    handleLocationResolve();
  }, [map, handleLocationResolve]);

  /** Re-fetch when user drags or clicks map */
  useEffect(() => {
    if (!map) return;
    const dragEndListener = map.addListener("dragend", handleLocationResolve);
    const clickListener = map.addListener("click", handleLocationResolve);
    return () => {
      dragEndListener.remove();
      clickListener.remove();
    };
  }, [map, handleLocationResolve]);

  /** Confirm and save selected location */
  const handleConfirmLocation = async () => {
    const location = data?.pudoResolveLocation;
    if (!location) return;

    const { id, addressLine1, addressLine2, source, provider, coordinate } = location;

    const queryData: RouteQueryData = {
      id,
      addressLine1: addressLine1 || "",
      addressLine2: addressLine2 || "",
      source: source as string,
      provider: provider as string,
      latitude: coordinate?.latitude!,
      longitude: coordinate?.longitude!,
    };

    await setQueryState({ [type]: queryData });
    push(`/go/${isPickup ? "dropoff" : "pickup"}`);
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <section className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-4">
        <HeadingLevel>
          <Heading className="text-xl">
            {isPickup ? "Choose your Pickup spot" : "Choose your Dropoff spot"}
          </Heading>
        </HeadingLevel>

        <div className="flex min-h-8 items-start">
          {loading || !data?.pudoResolveLocation ? (
            <Skeleton className="w-42 h-4 rounded-none bg-neutral-200" />
          ) : (
            <p className="text-xl flex-wrap font-uber-regular text-black">
              {data.pudoResolveLocation.addressLine1 ?? data.pudoResolveLocation.addressLine2}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <Button
          disabled={loading}
          onClick={handleConfirmLocation}
          className="py-2 text-lg font-uber-medium"
        >
          {isPickup ? "Confirm Pickup" : "Confirm Dropoff"}
        </Button>

        <Button
          disabled={loading}
          onClick={handleCancel}
          variant="secondary"
          className="py-2 text-lg font-uber-medium"
        >
          Cancel
        </Button>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useMemo } from "react";
import { NavigationIcon, LocateFixedIcon, ChevronDown } from "lucide-react";
import { HiMiniClock } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";

import { Heading, HeadingLevel } from "@repo/design-system/components/ui/heading-level";
import { Button } from "@repo/design-system/components/ui/button";
import { SelectSearch, SelectSearchLabelType } from "@repo/design-system/components/ui/select-search";
import { cn } from "@repo/design-system/lib/utils";
import { FloatingMarker, FLOATING_SIZE } from "@repo/design-system/components/ui/floating-marker";

import { useRouter } from "next/navigation";
import { usePreserveQueryRouter } from "@/utils/navigation";
import { useRouteQueryState } from "@/hooks/useRouteQueryState";

interface Option {
  id: string;
  label: string;
  description?: string;
  icon?: React.ElementType;
}

interface PlanTripPageProps {
  type: string;
}

export const PlanTripPage = ({ type }: PlanTripPageProps) => {
  const router = useRouter();
  const { pickupQuery, dropoffQuery, setQueryState } = useRouteQueryState();
  const { push } = usePreserveQueryRouter();

  // --- State ---
  const [pickupInputValue, setPickupInputValue] = useState(pickupQuery?.addressLine1);
  const [dropoffInputValue, setDropoffInputValue] = useState(dropoffQuery?.addressLine1);
  const [searchResults, setSearchResults] = useState<Option[]>([]);

  const isPickupStep = type === "pickup";

  // --- Options logic ---
  const options: Option[] = useMemo(() => {
    const baseOptions: Option[] = [
      { id: "set-location", label: "Set location on map", icon: NavigationIcon },
      {
        id: "allow-location",
        label: "Allow location access",
        description: "It provides your pickup address",
        icon: LocateFixedIcon,
      },
    ];

    return [...searchResults, ...baseOptions];
  }, [searchResults]);

  // --- Handlers ---
  const handleOptionSelect = async (id: string) => {
    if (id === "allow-location") {
    //   await handleLocationPermission();
      return;
    }

    if (id === "set-location") {
      push(`/go/${type}/set-pin`);
    }
  };

  const handleClearSelection = () => setQueryState({ [type]: null });

  const renderOptionLabel = ({ option, index, optionState: { setOpen } }: SelectSearchLabelType<Option>) => {
    const Icon = option.icon;
    const isAllowLocation = option.id === "allow-location";

    return (
      <div
        key={index}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(false);
          handleOptionSelect(option.id);
        }}
        className="flex cursor-pointer items-center gap-4 bg-white px-4 py-4 hover:bg-accent"
      >
        <span
          className={cn(
            "p-2 h-fit rounded-full",
            isAllowLocation ? "text-white bg-black" : "text-black bg-neutral-300"
          )}
        >
          {Icon && <Icon className="size-5" />}
        </span>
        <div className="flex flex-col leading-5">
          <p className="text-[16px] font-sans font-semibold text-black">{option.label}</p>
          {option.description && (
            <p className="text-[14px] font-sans font-normal text-black">{option.description}</p>
          )}
        </div>
      </div>
    );
  };

  // --- JSX ---
  return (
    <div className="flex flex-1 flex-col gap-y-4">
      <HeadingLevel>
        <Heading className="text-xl">Get a ride</Heading>
      </HeadingLevel>

      <div className="flex flex-1 flex-col gap-y-4">
        {/* Pickup Input */}
        <SelectSearch
          options={options}
          onChange={(value) => setPickupInputValue(value)}
          getLabel={renderOptionLabel}
          labelKey="label"
          valueKey="id"
          closeOnSelect
          className="w-full"
          selectContentClassName="gap-0 shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          selectTriggerClassName="p-0"
          selectItemClassName="p-0"
          value={pickupInputValue}
          input={{
            placeholder: "Pickup location",
            autoFocus: isPickupStep,
            onFocus: (e) => {
              e.preventDefault();
              if (!isPickupStep) push("/go/pickup");
            },
            overrides: {
              onClear: handleClearSelection,
              clearable: true,
              startEnhancer: <FloatingMarker size={FLOATING_SIZE["x-small-circle"]} />,
            },
          }}
        />

        {/* Dropoff Input */}
        <SelectSearch
          options={options}
          onChange={(value) => setDropoffInputValue(value)}
          getLabel={renderOptionLabel}
          labelKey="label"
          valueKey="id"
          closeOnSelect
          className="w-full"
          selectContentClassName="gap-0 p-0 shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          selectTriggerClassName="p-0"
          selectItemClassName="p-0"
          value={dropoffInputValue}
          input={{
            placeholder: "Dropoff location",
            autoFocus: !isPickupStep,
            onClick: (e) => {
              e.preventDefault();
              if (isPickupStep) push("/go/dropoff");
            },
            overrides: {
              onClear: handleClearSelection,
              clearable: true,
              startEnhancer: <FloatingMarker size={FLOATING_SIZE["x-small-square"]} />,
            },
          }}
        />

        {/* Time Picker */}
        <Button
          onClick={() => router.push("/go/select-time")}
          className="flex flex-1 items-center justify-between rounded-md bg-neutral-100 p-2 font-uber-regular text-[16px] text-black hover:bg-neutral-200"
        >
          <span className="flex items-center gap-x-2">
            <HiMiniClock className="size-5" />
            <span>Pickup now</span>
          </span>
          <ChevronDown className="size-4" />
        </Button>

        {/* Passenger Selector */}
        <Button className="flex w-fit items-center justify-between rounded-full bg-neutral-100 p-2 font-uber-regular text-[14px] text-black hover:bg-neutral-200">
          <FaUser className="size-4" />
          <span>For me</span>
          <ChevronDown className="size-4" />
        </Button>
      </div>

      {/* Search Button */}
      <Button
        disabled
        className="rounded-lg bg-neutral-100 p-2 font-uber-regular text-[16px] text-black hover:bg-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-400 disabled:opacity-100"
      >
        Search
      </Button>
    </div>
  );
};

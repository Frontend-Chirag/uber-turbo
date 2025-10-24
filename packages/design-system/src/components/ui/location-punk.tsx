import { Navigation2Icon } from "lucide-react";
import React from "react";
import { FaCaretUp, FaCircle } from "react-icons/fa";

export enum LOCATION_PUNK_TYPE {
    CONSUMER = "consumer",
    EARNER = "merchant",
}

export type LocationPunkSize = "small" | "medium" | "large";

interface LocationPunkProps {
    type?: LOCATION_PUNK_TYPE;
    showHeading?: boolean;
    confidenceRadius?: number;
    heading?: number; // 0-360 degrees
    size?: LocationPunkSize;
}

const sizeMap: Record<LocationPunkSize, string> = {
    small: "w-2 h-2",
    medium: "w-3.5 h-3.5",
    large: "w-6 h-6",
};

export const LocationPunk = ({
    type = LOCATION_PUNK_TYPE.CONSUMER,
    showHeading,
    confidenceRadius,
    heading = 0,
    size = "medium",
}: LocationPunkProps) => {
    const dimensionClass = sizeMap[size];

    if (type === LOCATION_PUNK_TYPE.EARNER) {
        return (
            <div
                className={`flex items-center justify-center p-2 ring-2 ring-black rounded-full bg-white ${dimensionClass}`}
            >
                <Navigation2Icon className="w-full h-full fill-black" />
            </div>
        );
    }

    return (
        <div className="relative flex items-center justify-center ">
            {/* Confidence Circle (lowest layer) */}
            {confidenceRadius && (
                <div
                    style={{
                        width: `${confidenceRadius}px`,
                        height: `${confidenceRadius}px`,
                    }}
                    className="absolute rounded-full bg-blue-500 opacity-25 z-0"
                />
            )}

            {/* Main Circle (middle layer) */}
            <FaCircle className="text-blue-600 w-3 h-3 relative z-10 shadow-[0_0_1px_rgba(0,0,0,0.4)]" />

            {/* Heading arrow (top layer, orbiting around circle) */}
            {showHeading && (
                <div
                    className="absolute z-20"
                    style={{
                        transform: `rotate(${heading}deg) translateY(-100%)`,
                        transformOrigin: "center center",
                    }}
                >
                    <FaCaretUp className="text-blue-600 w-4 h-4" />
                </div>
            )}
        </div>
    );
};

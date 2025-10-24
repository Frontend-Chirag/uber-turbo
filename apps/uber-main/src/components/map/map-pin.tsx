"use client";

import { useMapStore } from "@/stores/mapStore"
import { FLOATING_NEEDLE_SIZE, FLOATING_SIZE, FloatingMarker } from "@repo/design-system/components/ui/floating-marker";
import { cn } from "@repo/design-system/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MapPin() {
    const { map } = useMapStore();
    const isPin = usePathname().includes('set-pin');

    const [dragging, setIsDragging] = useState(false)

    useEffect(() => {
        if (!map) return;

        const dragStartListener = map.addListener("dragstart", () =>
            setIsDragging(true)
        );
        const dragEndListener = map.addListener("dragend", () =>
            setIsDragging(false)
        );

        return () => {
            google.maps.event.removeListener(dragStartListener);
            google.maps.event.removeListener(dragEndListener);
        };
    }, [map]);

    if (!isPin || !map) return null; 

    return (
        <div
            className={cn(
                "pointer-events-none absolute block",
            )}
            style={{
                transform: "translate(-50%, -100%)",
                top: "50%",
                left: "50%",
            }}
        >
            <FloatingMarker
                dragging={dragging}
                markerVisible={true}
                size={FLOATING_SIZE["x-small-circle"]}
                needle={FLOATING_NEEDLE_SIZE.medium}
            />
        </div>
    )
}
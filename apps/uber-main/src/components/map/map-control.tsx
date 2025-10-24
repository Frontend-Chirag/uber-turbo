"use client";

import { useMapStore } from "@/stores/mapStore";
import { Button } from "@repo/design-system/components/ui/button";
import { MinusIcon, PlusIcon, ZoomOut } from "lucide-react";
import { MdMyLocation } from "react-icons/md";


export default function MapControl() {
    const { map } = useMapStore();

    if (!map) return;

    const zoomIn = () => {
        map.setZoom(map.getZoom()! + 1);
    };

    const zoomOut = () => {
        map.setZoom(map.getZoom()! - 1);
    };

    return (
        <div className="flex flex-col gap-y-5 absolute bottom-8 right-4 z-10">
            <Button
                // onClick={() => mapInstance.current?.setCenter(currentLocation)}
                className="text-black bg-white w-10 h-10 hover:bg-neutral-100 rounded-full shadow-[0_0px_20px_rgba(0,0,0,0.2)]"
            >
                <MdMyLocation className="size-5" />
            </Button>

            <div className="flex flex-col w-11 bg-white rounded-md overflow-hidden shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
                <Button
                    onClick={zoomIn}
                    className="text-black bg-white p-0 hover:bg-neutral-100 rounded-none"
                >
                    <PlusIcon className="size-6" />
                </Button>
                <Button
                    onClick={zoomOut}
                    className="text-black bg-white p-2 hover:bg-neutral-100 rounded-none"
                >
                    <MinusIcon className="size-6" />
                </Button>
            </div>
        </div>
    )
}

"use client";

import { useMapStore } from "@/stores/mapStore";
import { useEffect, useRef } from "react";


export default function MapClient({ children }: { children: React.ReactNode }) {

    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<google.maps.Map | null>(null);

    const { isLoaded, setMap, setIsLoaded } = useMapStore();

    const initMap = () => {
        if (!mapRef.current || mapInstance.current) return;

        const map = new google.maps.Map(mapRef.current, {
           center: { lat: 28.6327426, lng: 77.2195969 },
            zoom: 15,
            disableDefaultUI: true,
            mapId: 'e8cac618de36f0029199e665',
            gestureHandling: 'greedy',
        });

        mapInstance.current = map;
        setMap(map);
        setIsLoaded(true);
    }

    useEffect(() => {
        // Check if already loaded
        if (window.google?.maps) {
            setIsLoaded(true);
            return;
        }

        // Load the script manually
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=core&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=quarterly`;
        script.async = true;
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);

        return () => {
            // Cleanup if needed
        };
    }, []);

    useEffect(() => {
        if (isLoaded) initMap();
    }, [isLoaded]);

    return (
        <>
            <div className="relative w-full h-full">
                <div ref={mapRef} className="w-full h-full" />
                {isLoaded && children}
            </div>
        </>
    )
}
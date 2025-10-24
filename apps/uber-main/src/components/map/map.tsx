import { Suspense } from "react";

import MapClient from "./map-client";
import MapControl from "./map-control";
import MapPin from "./map-pin";
import MapRoute from "./map-route";

export default function Map() {


    return (
        <>
            <div className="w-full h-full relative">
                <Suspense fallback={<div>Loading...</div>} />
                <MapClient>
                    <MapControl />
                    <MapPin />
                    <MapRoute />
                </MapClient>
            </div>
        </>
    )
}



// "use client";
// import { useEffect, useRef, useState } from "react";
// import { MinusIcon, PlusIcon } from "lucide-react";
// import { MdMyLocation } from 'react-icons/md';
// import { Button } from "@repo/design-system/components/ui/button";
// import { cn } from "@repo/design-system/lib/utils";
// import { FLOATING_NEEDLE_SIZE, FLOATING_SIZE, FloatingMarker } from "@repo/design-system/components/ui/floating-marker";
// import { usePathname } from "next/navigation";
// // import React, { useEffect, useMemo, useState } from 'react';
// // import { usePathname } from 'next/navigation';
// // import { MinusIcon, PlusIcon } from 'lucide-react';
// // import { Map as MapComponent, AdvancedMarker, useMapsLibrary, useMap, } from '@vis.gl/react-google-maps';


// // import { Button } from '@repo/design-system/components/ui/button';
// // import { LocationPunk } from '@repo/design-system/components/ui/location-punk';
// // import { FLOATING_SIZE, FloatingMarker, FLOATING_NEEDLE_SIZE, FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS } from '@repo/design-system/components/ui/floating-marker';

// // import { useGeoLocation } from './location-provider';
// // import { LocationData } from '@/types/location';
// // import { useLocationParams } from '@/utils/hooks';
// // import { useLocationState } from '@/hooks/useLocationState';
// // import { FaDotCircle, FaSquare } from 'react-icons/fa';
// // import { cn } from '@repo/design-system/lib/utils';
// // import { GetRouteResponse } from '@repo/proto/route';


// // interface RouteInfo {
// //     distance: string;
// //     duration: string;
// //     polyline: google.maps.Polyline | null;
// // }


// // function MapControl() {

// //     const { setZoom } = useGeoLocation();

// //     const center = () => {
// //         // Center map on current location
// //         setZoom(17)
// //     };

// //     const zoomIn = () => {
// //         setZoom((prev) => prev + 1)
// //     };

// //     const zoomOut = () => {
// //         setZoom((prev) => prev - 1)
// //     };

// //     return (
// //         <div className='flex flex-col gap-y-5 absolute bottom-6 right-4'>
// //             <Button
// //                 onClick={center}
// //                 className="text-black bg-white w-10 h-10 hover:bg-neutral-100 rounded-full shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
// //                 <MdMyLocation className="size-5" />
// //             </Button>
// //             <div className='flex flex-col w-11 bg-white rounded-md overflow-hidden shadow-[0_0px_20px_rgba(0,0,0,0.2)]'>
// //                 <Button
// //                     onClick={zoomIn}
// //                     className="text-black bg-white p-0 hover:bg-neutral-100 rounded-none">
// //                     <PlusIcon className="size-6" />
// //                 </Button>
// //                 <Button onClick={zoomOut} className="text-black bg-white p-2 hover:bg-neutral-100 rounded-none">
// //                     <MinusIcon className="size-6" />
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // }



// // // const RouteRender: React.FC<{
// // //     pickup: LocationData | null;
// // //     dropoff: LocationData | null;
// // //     onRouteCalculated?: (route: RouteInfo) => void;
// // // }> = ({ pickup, dropoff, onRouteCalculated }) => {
// // //     const map = useMap();
// // //     const routesLibrary = useMapsLibrary('routes');
// // //     const googleLibrary = useMapsLibrary('core');
// // //     const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
// // //     const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);


// // //     // Initialize directions service and renderer
// // //     useEffect(() => {
// // //         if (!routesLibrary || !map) return;

// // //         const service = new routesLibrary.DirectionsService();
// // //         const renderer = new routesLibrary.DirectionsRenderer({
// // //             suppressMarkers: true,
// // //             preserveViewport: true,   // 👈 important: don’t auto-recenter map
// // //             draggable: false,
// // //             polylineOptions: {
// // //                 strokeColor: '#000000',
// // //                 strokeOpacity: 1,
// // //                 strokeWeight: 3,
// // //             },
// // //         });

// // //         renderer.setMap(map);
// // //         setDirectionsService(service);
// // //         setDirectionsRenderer(renderer);

// // //         return () => {
// // //             renderer.setMap(null);
// // //         };
// // //     }, [routesLibrary, map]);


// // //     // Calculate and display route
// // //     useEffect(() => {
// // //         if (!directionsService || !directionsRenderer || !pickup || !dropoff) {
// // //             directionsRenderer?.setDirections({ routes: [] } as any)
// // //             return;
// // //         }

// // //         if (!pickup.latitude || !pickup.longitude || !dropoff.latitude || !dropoff.longitude || !googleLibrary) return;


// // //         const origin = new googleLibrary.LatLng(
// // //             pickup.latitude,
// // //             pickup.longitude
// // //         );
// // //         const destination = new googleLibrary.LatLng(
// // //             dropoff.latitude,
// // //             dropoff.longitude
// // //         );

// // //         directionsService.route(
// // //             {
// // //                 origin,
// // //                 destination,
// // //                 travelMode: google.maps.TravelMode.DRIVING,
// // //                 avoidHighways: false,
// // //                 avoidTolls: false,
// // //             },
// // //             (result, status) => {
// // //                 if (status === 'OK' && result) {
// // //                     directionsRenderer.setDirections(result);

// // //                     const route = result.routes[0];
// // //                     if (route && onRouteCalculated) {
// // //                         const leg = route.legs[0];
// // //                         onRouteCalculated({
// // //                             distance: leg.distance?.text || '',
// // //                             duration: leg.duration?.text || '',
// // //                             polyline: null
// // //                         });

// // //                     }
// // //                 } else {
// // //                     console.error('Directions request failed:', status);
// // //                 }
// // //             }
// // //         )

// // //     }, [directionsService, directionsRenderer, pickup, dropoff]);

// // //     return null;
// // // }

// // export function Map() {

// //     const map = useMap();
// //     const googleLibrary = useMapsLibrary('core');
// //     const { currentLocation, tempLocation, isPin, zoom, setZoom } = useGeoLocation();
// //     const [isDragging, setIsDragging] = useState(false);

// //     const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
// //     const { getData, isRoute } = useLocationState();
// //     const pickup = getData('pickup') as LocationData;
// //     const dropoff = getData('dropoff') as LocationData;
// //     // const pickup = isRoute('pickup') ;
// //     // const dropoff = isRoute('dropoff');

// //     const pathname = usePathname();
// //     const isShouldShowMarker = pathname.includes('set-pin');

// //     useEffect(() => {

// //         const getRoute = async () => {

// //             const response = await fetch('/go/custom-api/navigation', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({
// //                     routes: {
// //                         origin: {
// //                             latitude: pickup?.latitude,
// //                             longitude: pickup?.longitude
// //                         },
// //                         destinations:
// //                         {
// //                             latitude: dropoff?.latitude,
// //                             longitude: dropoff?.longitude
// //                         }
// //                     }

// //                 })
// //             });

// //             const data: GetRouteResponse = await response.json();

// //             console.log(data)
// //         };

// //         if (pickup && dropoff) {
// //             getRoute();
// //         }

// //     }, [pickup, dropoff])

// //     const handleRouteCalculated = (route: RouteInfo) => {
// //         setRouteInfo(route)
// //     }
// //     return (
// //         <div className='w-full h-full relative'>
// //             <MapComponent
// //                 defaultZoom={15}
// //                 zoom={zoom}
// //                 onDblclick={(e) => setZoom(zoom + 1)}
// //                 defaultCenter={{ lat: 28.6327426, lng: 77.2195969 }}
// //                 center={tempLocation?.coords}
// //                 mapId='e8cac618de36f0029199e665'
// //                 disableDefaultUI
// //                 onDragstart={() => {
// //                     setIsDragging(true);
// //                 }}
// //                 onDragend={() => {
// //                     setIsDragging(false);
// //                 }}
// //                 gestureHandling="greedy"
// //                 zoomControl={false}
// //                 streetViewControl={false}
// //                 mapTypeControl={false}
// //                 fullscreenControl={false}
// //                 scrollwheel={true}
// //             >
// //                 {currentLocation && (
// //                     <AdvancedMarker position={currentLocation}>
// //                         <LocationPunk />
// //                     </AdvancedMarker>
// //                 )}
// //                 {pickup && (
// //                     <AdvancedMarker position={{ lat: pickup.latitude, lng: pickup.longitude }}>
// //                         {/* <div className='relative'> */}
// //                         <FloatingMarker
// //                             startEnhancer={<p className='text-black text-[14px] font-uber-medium'>From</p>}
// //                             anchorPosition={{
// //                                 position: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomLeft,
// //                                 offset: 0
// //                             }}
// //                             label={pickup.addressLine1!}
// //                             size={FLOATING_SIZE["x-small-circle"]}
// //                         />

// //                         {/* </div> */}
// //                     </AdvancedMarker>
// //                 )}
// //                 {dropoff && (
// //                     <AdvancedMarker position={{ lat: dropoff.latitude, lng: dropoff.longitude }}>
// //                         <FloatingMarker
// //                             startEnhancer={<p className='text-black text-[14px] font-uber-medium'>To</p>}
// //                             anchorPosition={{
// //                                 position: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topRight,
// //                                 offset: 0
// //                             }}
// //                             label={dropoff.addressLine1!}
// //                             size={FLOATING_SIZE['x-small-square']}
// //                         />
// //                     </AdvancedMarker>
// //                 )}

// //                 {/* <RouteRender
// //                     pickup={pickup}
// //                     dropoff={dropoff}
// //                     onRouteCalculated={handleRouteCalculated}
// //                 /> */}
// //                 <div
// //                     className={cn(
// //                         "pointer-events-none absolute",
// //                         isShouldShowMarker ? 'block' : 'hidden'
// //                     )}
// //                     style={{
// //                         transform: "translate(-50%, -100%)",
// //                         top: '50%',
// //                         left: '50%'
// //                     }}
// //                 >
// //                     <FloatingMarker
// //                         dragging={isDragging}
// //                         markerVisible={isShouldShowMarker}
// //                         needle={FLOATING_NEEDLE_SIZE.medium}
// //                         size={FLOATING_SIZE["x-small-circle"]}
// //                     />
// //                 </div>

// //                 <MapControl />
// //             </MapComponent>
// //         </div >
// //     );
// // };

// const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

// export default function Map() {
//     const mapRef = useRef<HTMLDivElement>(null);
//     const mapInstance = useRef<google.maps.Map | null>(null);

//     const [isLoaded, setIsLoaded] = useState(false);

//     const pathname = usePathname();
//     const isShouldShowMarker = pathname.includes("set-pin");

//     const [dragging, setIsDragging] = useState<boolean>(false);
//     const [zoom, setZoom] = useState<number>(15);

//     const initMap = () => {
//         if (!isLoaded || !mapRef.current || mapInstance.current) return;

//         const map = new google.maps.Map(mapRef.current, {
//             center: { lat: 28.6327426, lng: 77.2195969 },
//             zoom,
//             disableDefaultUI: true,
//             mapId: 'e8cac618de36f0029199e665',
//             gestureHandling: 'greedy',
//         });

//         map.addListener("dragstart", () => setIsDragging(true));
//         map.addListener("dragend", () => setIsDragging(false));

//         mapInstance.current = map;
//     }


//     useEffect(() => {
//         // Check if already loaded
//         if (window.google?.maps) {
//             setIsLoaded(true);
//             return;
//         }

//         // Load the script manually
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?libraries=core&key=${GOOGLE_MAPS_API_KEY}&v=quarterly`;
//         script.async = true;
//         script.onload = () => setIsLoaded(true);
//         document.head.appendChild(script);

//         return () => {
//             // Cleanup if needed
//         };
//     }, []);

//     useEffect(() => {
//         if (isLoaded) initMap();
//     }, [isLoaded]);

//     useEffect(() => {
//         if (mapInstance.current) mapInstance.current.setZoom(zoom);
//     }, [zoom]);

//     return (
//         <div className="relative w-full h-full">
//             <div ref={mapRef} className="w-full h-full" />
//             <div
//                 className={cn(
//                     "pointer-events-none absolute block",
//                 )}
//                 style={{
//                     transform: "translate(-50%, -100%)",
//                     top: "50%",
//                     left: "50%",
//                 }}
//             >
//                 <FloatingMarker
//                     dragging={dragging}
//                     markerVisible={true}
//                     size={FLOATING_SIZE["x-small-circle"]}
//                     needle={FLOATING_NEEDLE_SIZE.medium}
//                 />
//             </div>
//             {/* Zoom + Location Controls */}
//             <div className="flex flex-col gap-y-5 absolute bottom-8 right-4 z-10">
//                 <Button
//                     // onClick={() => mapInstance.current?.setCenter(currentLocation)}
//                     className="text-black bg-white w-10 h-10 hover:bg-neutral-100 rounded-full shadow-[0_0px_20px_rgba(0,0,0,0.2)]"
//                 >
//                     <MdMyLocation className="size-5" />
//                 </Button>

//                 <div className="flex flex-col w-11 bg-white rounded-md overflow-hidden shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
//                     <Button
//                         onClick={() => setZoom((z) => z + 1)}
//                         className="text-black bg-white p-0 hover:bg-neutral-100 rounded-none"
//                     >
//                         <PlusIcon className="size-6" />
//                     </Button>
//                     <Button
//                         onClick={() => setZoom((z) => z - 1)}
//                         className="text-black bg-white p-2 hover:bg-neutral-100 rounded-none"
//                     >
//                         <MinusIcon className="size-6" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }


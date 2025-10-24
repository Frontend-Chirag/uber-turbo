import { create } from "zustand";

interface Coords {
    lat: number;
    lng: number;
}

interface MapState {
    map: google.maps.Map | null;
    isLoaded: boolean;
    setMap: (map: google.maps.Map | null) => void;
    setIsLoaded: (loaded: boolean) => void;
}

export const useMapStore = create<MapState>((set) => ({
    map: null,
    isLoaded: false,
    setMap: (map) => set({ map }),
    setIsLoaded: (loaded) => set({ isLoaded: loaded }),
}))
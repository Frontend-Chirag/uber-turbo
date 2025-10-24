type LibraryName =
  | "core"
  | "maps"
  | "routes"
  | "places"
  | "geometry"
  | "drawing"
  | "visualization"
  | "marker"
  | "geocoding"
  | "maps3d";

type LibraryType<T extends LibraryName> =
  T extends "core" ? google.maps.CoreLibrary :
  T extends "maps" ? google.maps.MapsLibrary :
  T extends "routes" ? google.maps.RoutesLibrary :
  T extends "places" ? google.maps.PlacesLibrary :
  T extends "geometry" ? google.maps.GeometryLibrary :
  T extends "drawing" ? google.maps.DrawingLibrary :
  T extends "visualization" ? google.maps.VisualizationLibrary :
  T extends "marker" ? google.maps.MarkerLibrary :
  T extends "geocoding" ? google.maps.GeocodingLibrary :
  T extends "maps3d" ? google.maps.Maps3DLibrary :
  never;

export async function loadLibrary<T extends LibraryName>(
  name: T
): Promise<LibraryType<T>> {
  return (await google.maps.importLibrary(name)) as LibraryType<T>;
}

// West Tennessee cities we cover, with map coordinates.
// Trucks register by city; pins drop near the city center.
export const CITIES: Record<string, { lat: number; lng: number }> = {
  'Jackson': { lat: 35.6145, lng: -88.8139 },
  'Milan': { lat: 35.9198, lng: -88.7589 },
  'Dyersburg': { lat: 36.0345, lng: -89.3856 },
  'Paris': { lat: 36.302, lng: -88.3267 },
  'Martin': { lat: 36.3434, lng: -88.8503 },
  'Henderson': { lat: 35.4392, lng: -88.6414 },
  'Humboldt': { lat: 35.8198, lng: -88.9145 },
  'McKenzie': { lat: 36.1323, lng: -88.5184 },
  'Huntingdon': { lat: 36.0006, lng: -88.4281 },
};

export const CITY_NAMES = Object.keys(CITIES);

// Center of the coverage area, used as the map's starting view.
export const MAP_CENTER = { lat: 35.9, lng: -88.75 };
export const MAP_ZOOM = 9;

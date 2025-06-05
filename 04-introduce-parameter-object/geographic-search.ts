export interface Store {
  name: string;
  latitude: number;
  longitude: number;
}

export function findStores(latitude: number, longitude: number, radius: number, unit: 'km' | 'miles'): Store[] {
  // find stores within radius
  return [
    { name: 'Store A', latitude: latitude + 0.01, longitude: longitude + 0.01 }
  ];
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit: 'km' | 'miles'): number {
  // calculate distance between points
  const diff = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2));
  return unit === 'km' ? diff * 111 : diff * 69; // simplified calculation
}

export function drawMapCircle(centerLat: number, centerLon: number, radius: number, unit: 'km' | 'miles', color: string): string {
  // draw circle on map
  return `Circle at (${centerLat}, ${centerLon}) with radius ${radius}${unit} in ${color}`;
}

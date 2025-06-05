// Global cache
export let cache: Record<string, any> = {};
export let cacheSize = 0;
export let maxCacheSize = 100;

export function addToCache(key: string, value: any): void {
  if (cacheSize >= maxCacheSize) {
    // evict oldest (simplified - just clear for now)
    cache = {};
    cacheSize = 0;
  }
  cache[key] = value;
  cacheSize++;
}

export function getFromCache(key: string): any {
  return cache[key];
}

export function clearCache(): void {
  cache = {};
  cacheSize = 0;
}

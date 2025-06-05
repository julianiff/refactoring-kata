import { describe, it, expect, beforeEach } from 'vitest';
import { addToCache, getFromCache, clearCache, cacheSize } from './cache-manager';

describe('Cache Manager', () => {
  beforeEach(() => {
    clearCache();
  });
  
  it('should add and retrieve from cache', () => {
    addToCache('user:1', { name: 'John' });
    addToCache('user:2', { name: 'Jane' });
    
    expect(getFromCache('user:1')).toEqual({ name: 'John' });
    expect(cacheSize).toBe(2);
  });
});

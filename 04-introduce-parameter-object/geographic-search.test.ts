import { describe, it, expect } from 'vitest';
import { findStores } from './geographic-search';

describe('Geographic Search', () => {
  it('should find stores within radius', () => {
    const stores = findStores(40.7128, -74.0060, 10, 'km');
    
    expect(stores.length).toBeGreaterThan(0);
    expect(stores[0].name).toBe('Store A');
  });
});

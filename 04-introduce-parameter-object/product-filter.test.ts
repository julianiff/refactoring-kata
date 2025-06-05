import { describe, it, expect } from 'vitest';
import { filterProducts } from './product-filter';

describe('Product Filter', () => {
  it('should filter products by criteria', () => {
    const filtered = filterProducts(500, 1000, 'Electronics', true, 'TechCo');
    
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Laptop');
  });
});

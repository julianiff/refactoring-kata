import { describe, it, expect } from 'vitest';
import { calculatePrice, Order } from './price-calculator';

describe('Price Calculator', () => {
  it('should calculate price with discounts and shipping', () => {
    const order: Order = {
      quantity: 2,
      itemPrice: 30,
      discount: 0.1,
      taxRate: 0.08
    };
    
    const price = calculatePrice(order);
    
    // (2 * 30 * 0.9 * 1.08) + 10 shipping = 58.32 + 10 = 68.32
    expect(price).toBeCloseTo(68.32, 2);
  });
});

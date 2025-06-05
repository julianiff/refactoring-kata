import { describe, it, expect, vi } from 'vitest';
import { processOrder, Order } from './status-checker';

describe('Status Checker', () => {
  it('should process order based on status', () => {
    console.log = vi.fn();
    
    const order: Order = {
      id: '123',
      status: 1,
      priority: 3
    };
    
    processOrder(order);
    
    expect(console.log).toHaveBeenCalledWith('Shipping order 123');
  });
});

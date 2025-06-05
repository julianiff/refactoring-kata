import { describe, it, expect } from 'vitest';
import { Order } from './order-processing';

describe('Order Processing', () => {
  it('should calculate order total with tax and shipping', () => {
    const order = new Order();
    order.addItem({ name: 'Book', price: 20 });
    order.addItem({ name: 'Pen', price: 5 });
    order.taxRate = 0.1;
    order.shippingMethod = 'standard';
    order.shippingCost = order.calculateShipping();
    
    expect(order.calculateTotal()).toBe(37.5); // 25 + 2.5 tax + 10 shipping
  });
});

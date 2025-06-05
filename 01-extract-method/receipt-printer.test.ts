import { describe, it, expect } from 'vitest';
import { printReceipt, Item } from './receipt-printer';

describe('Receipt Printer', () => {
  it('should print a receipt with items and tax', () => {
    const items: Item[] = [
      { name: 'Apple', price: 1.99 },
      { name: 'Banana', price: 0.99 }
    ];
    const taxRate = 0.08;
    
    const result = printReceipt(items, taxRate);
    
    expect(result).toContain('RECEIPT');
    expect(result).toContain('Apple: $1.99');
    expect(result).toContain('Banana: $0.99');
    expect(result).toContain('Subtotal: $2.98');
    expect(result).toContain('Tax: $0.24');
    expect(result).toContain('Total: $3.22');
  });
});

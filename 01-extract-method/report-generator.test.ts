import { describe, it, expect } from 'vitest';
import { generateReport, Sale } from './report-generator';

describe('Report Generator', () => {
  it('should generate HTML report with sales data', () => {
    const sales: Sale[] = [
      { date: '2024-01-01', product: 'Widget', amount: 100 },
      { date: '2024-01-02', product: 'Gadget', amount: 200 }
    ];
    
    const result = generateReport(sales);
    
    expect(result).toContain('<h1>Monthly Sales Report</h1>');
    expect(result).toContain('Widget - $100');
    expect(result).toContain('Total: $300');
    expect(result).toContain('Average: $150.00');
  });
});

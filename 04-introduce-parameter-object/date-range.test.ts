import { describe, it, expect } from 'vitest';
import { generateReport } from './date-range';

describe('Date Range Operations', () => {
  it('should generate report for date range', () => {
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-01-31');
    
    const report = generateReport(startDate, endDate, true, 'PDF');
    
    expect(report).toContain('Report (PDF): $');
  });
});

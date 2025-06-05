import { describe, it, expect } from 'vitest';
import { calculatePay, Employee } from './employee-payroll';

describe('Employee Payroll', () => {
  it('should calculate pay for a manager with bonus', () => {
    const manager: Employee = {
      name: 'Alice',
      type: 'manager',
      hoursWorked: 40,
      hourlyRate: 50
    };
    
    expect(calculatePay(manager)).toBe(3000); // 2000 base + 1000 bonus
  });
});

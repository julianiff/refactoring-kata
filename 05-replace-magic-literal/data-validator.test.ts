import { describe, it, expect } from 'vitest';
import { validateInput, ApplicationData } from './data-validator';

describe('Data Validator', () => {
  it('should validate application data', () => {
    const validData: ApplicationData = {
      age: 30,
      income: 50000,
      score: 700
    };
    
    expect(validateInput(validData)).toBe(true);
  });
});

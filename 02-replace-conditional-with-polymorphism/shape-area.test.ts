import { describe, it, expect } from 'vitest';
import { calculateArea, Circle } from './shape-area';

describe('Shape Area Calculator', () => {
  it('should calculate area of a circle', () => {
    const circle: Circle = {
      type: 'circle',
      radius: 5
    };
    
    const area = calculateArea(circle);
    expect(area).toBeCloseTo(78.54, 2);
  });
});

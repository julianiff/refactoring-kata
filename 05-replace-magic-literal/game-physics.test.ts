import { describe, it, expect } from 'vitest';
import { GameObject } from './game-physics';

describe('Game Physics', () => {
  it('should apply gravity to game object', () => {
    const obj = new GameObject();
    obj.position.y = 100;
    
    obj.update();
    
    expect(obj.velocity.y).toBe(9.81);
    expect(obj.position.y).toBeGreaterThan(100);
  });
});

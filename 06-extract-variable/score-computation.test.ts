import { describe, it, expect } from 'vitest';
import { computeScore, Player } from './score-computation';

describe('Score Computation', () => {
  it('should compute player score with bonuses', () => {
    const player: Player = {
      name: 'Hero',
      kills: 10,
      assists: 5,
      deaths: 2,
      gameTime: 2000,
      objectives: 3
    };
    
    // (10 * 100) + (5 * 50) - (2 * 25) + 500 + (3 * 200) = 2300
    expect(computeScore(player)).toBe(2300);
  });
});

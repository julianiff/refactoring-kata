import { describe, it, expect, beforeEach, vi } from 'vitest';
import { playerScore, updateScore, resetGame } from './game-state';

describe('Game State', () => {
  beforeEach(() => {
    resetGame();
  });
  
  it('should update score and level up', () => {
    console.log = vi.fn();
    
    updateScore(500);
    updateScore(600); // Total: 1100, should trigger level up
    
    expect(console.log).toHaveBeenCalledWith('Level up! Now on level 2');
  });
});

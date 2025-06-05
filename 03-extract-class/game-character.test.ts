import { describe, it, expect } from 'vitest';
import { Character } from './game-character';

describe('Game Character', () => {
  it('should handle combat with equipment', () => {
    const hero = new Character('Hero');
    const enemy = new Character('Enemy');
    
    hero.equipItem({ name: 'Sword', damage: 10 });
    hero.attack(enemy);
    
    expect(enemy.health).toBe(85); // 100 - (10 strength + 10 weapon - 5 defense)
  });
});

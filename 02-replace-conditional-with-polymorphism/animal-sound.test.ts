import { describe, it, expect } from 'vitest';
import { makeSound, Animal } from './animal-sound';

describe('Animal Sound System', () => {
  it('should return correct sound for a dog', () => {
    const dog: Animal = { type: 'dog', name: 'Rex' };
    expect(makeSound(dog)).toBe('Woof!');
  });
});

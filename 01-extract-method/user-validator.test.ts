import { describe, it, expect } from 'vitest';
import { validateUser, User } from './user-validator';

describe('User Validator', () => {
  it('should validate a correct user', () => {
    const user: User = {
      email: 'test@example.com',
      password: 'Password123',
      age: 25
    };
    
    expect(validateUser(user)).toBe(true);
  });
});

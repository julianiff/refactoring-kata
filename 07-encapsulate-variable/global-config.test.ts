import { describe, it, expect, beforeEach } from 'vitest';
import { defaultTimeout, updateConfig, makeRequest } from './global-config';

describe('Global Config', () => {
  beforeEach(() => {
    updateConfig(5000, 3, 'https://api.example.com');
  });
  
  it('should use global config values', async () => {
    updateConfig(3000, 5, 'https://api.test.com');
    
    console.log = vi.fn();
    await makeRequest('/users');
    
    expect(console.log).toHaveBeenCalledWith(
      'Making request to https://api.test.com/users with timeout 3000ms'
    );
  });
});

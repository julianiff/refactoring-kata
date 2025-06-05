import { describe, it, expect } from 'vitest';
import { buildApiUrl, ApiParams } from './url-builder';

describe('URL Builder', () => {
  it('should build API URL with default values', () => {
    const params: ApiParams = {
      resource: 'users',
      apiKey: 'abc123'
    };
    
    const url = buildApiUrl(params);
    
    expect(url).toBe('https://api.example.com/v2/users?key=abc123&format=json&limit=10&offset=0');
  });
});

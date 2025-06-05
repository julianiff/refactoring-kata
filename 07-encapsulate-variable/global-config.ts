// Global configuration variables
export let defaultTimeout = 5000;
export let maxRetries = 3;
export let apiEndpoint = 'https://api.example.com';

export function makeRequest(url: string): Promise<string> {
  // uses global variables directly
  return new Promise((resolve) => {
    console.log(`Making request to ${apiEndpoint}${url} with timeout ${defaultTimeout}ms`);
    setTimeout(() => {
      resolve('Response data');
    }, 100);
  });
}

export function updateConfig(timeout: number, retries: number, endpoint: string): void {
  defaultTimeout = timeout;
  maxRetries = retries;
  apiEndpoint = endpoint;
}

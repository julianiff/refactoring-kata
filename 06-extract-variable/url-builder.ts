export interface ApiParams {
  resource: string;
  apiKey: string;
  format?: string;
  limit?: number;
  offset?: number;
}

export function buildApiUrl(params: ApiParams): string {
  return `https://api.example.com/v2/${params.resource}?` +
         `key=${params.apiKey}&format=${params.format || 'json'}&` +
         `limit=${params.limit || 10}&offset=${params.offset || 0}`;
}

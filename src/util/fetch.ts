export const AUTH_SERVICE_BASE_URL = import.meta.env.PROD
  ? String(import.meta.env.VITE_PROD_AUTH_SERVICE_BASE_URL)
  : String(import.meta.env.VITE_DEV_AUTH_SERVICE_BASE_URL);

export function apiFetch(
  url: string,
  config?: RequestInit,
): Promise<Response> {
  return fetch(url, {
    ...config,
    mode: 'cors',
  });
}

export function GET(
  url: string,
  config?: RequestInit,
): Promise<Response> {
  return apiFetch(
    url,
    {
      ...config,
      method: 'GET',
    },
  );
}

export function POST(
  url: string,
  data?: unknown,
  config?: RequestInit,
): Promise<Response> {
  return apiFetch(
    url,
    {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    },
  );
}

export function PUT(
  url: string,
  data?: unknown,
  config?: RequestInit,
): Promise<Response> {
  return apiFetch(
    url,
    {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    },
  );
}

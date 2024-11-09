/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options).then(async (response) => {
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.message || 'An error occurred';
      throw new Error(errorMessage);
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};

import ky from 'ky';
import { withApiError } from './apiError';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
export const API_BASE_URL = `${API_URL}/api/`;

export const TOKEN_KEY = "freya_token";
export const USER_KEY = "freya_user";

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function getAuthHeaders(): Record<string, string> {
  const token = getStoredToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const apiClient = ky.create({
  baseUrl: API_BASE_URL,
  timeout: 10000,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const token = getStoredToken();
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});

export function createResourceClient(resourcePath: string) {
  // ky con prefixUrl no acepta barra inicial en el path
  const base = resourcePath.startsWith('/') ? resourcePath.slice(1) : resourcePath;

  return {
    getAll: <TResponse>(): Promise<TResponse> =>
      withApiError(apiClient.get(base).json<TResponse>()),

    getById: <TResponse>(id: string): Promise<TResponse> =>
      withApiError(apiClient.get(`${base}/${id}`).json<TResponse>()),

    create: <TDto, TResponse = TDto>(data: TDto): Promise<TResponse> =>
      withApiError(apiClient.post(base, { json: data }).json<TResponse>()),

    update: <TDto, TResponse = TDto>(id: string, data: TDto): Promise<TResponse> =>
      withApiError(apiClient.put(`${base}/${id}`, { json: data }).json<TResponse>()),

    delete: (id: string): Promise<void> =>
      withApiError(apiClient.delete(`${base}/${id}`).then(() => undefined)),
  };
}
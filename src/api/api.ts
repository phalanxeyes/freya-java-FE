import ky from 'ky';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
export const API_BASE_URL = `${API_URL}/api`;

export const apiClient = ky.create({
  baseUrl: API_BASE_URL,
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (_request) => {
        // TODO: AUTH HEADERS HERE!
      },
    ],
    beforeError: [
      (state) => {
        console.error(`API error:${state.error.message}`);
        return state.error;
      },
    ],
  },
});

export function createResourceClient(resourcePath: string) {
  // ky con prefixUrl no acepta barra inicial en el path
  const base = resourcePath.startsWith('/') ? resourcePath.slice(1) : resourcePath;

  return {
    getAll: <TResponse>(): Promise<TResponse> =>
      apiClient.get(base).json<TResponse>(),

    getById: <TResponse>(id: string): Promise<TResponse> =>
      apiClient.get(`${base}/${id}`).json<TResponse>(),

    create: <TDto, TResponse = TDto>(data: TDto): Promise<TResponse> =>
      apiClient.post(base, { json: data }).json<TResponse>(),

    update: <TDto, TResponse = TDto>(id: string, data: TDto): Promise<TResponse> =>
      apiClient.put(`${base}/${id}`, { json: data }).json<TResponse>(),

    delete: (id: string): Promise<void> =>
      apiClient.delete(`${base}/${id}`).then(() => undefined),
  };
}
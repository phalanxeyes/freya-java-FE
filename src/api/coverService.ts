import { apiClient, createResourceClient } from './api';
import { withApiError } from './apiError';
import { type CreateCoverDTO, type CoverDTO  } from './api.d';

const client = createResourceClient('covers');

export const coverService = {
  getAll: () => client.getAll<CoverDTO[]>(),
  getPending: () => withApiError(apiClient.get('covers/pending').json<CoverDTO[]>()),
  getById: (id: string) => client.getById<CoverDTO>(id),
  create: (data: CreateCoverDTO) => client.create<CreateCoverDTO, CoverDTO>(data),
  update: (id: string, data: CreateCoverDTO) => client.update<CreateCoverDTO, CoverDTO>(id, data),
  delete: (id: string) => client.delete(id),
  approve: (id: string) => withApiError(apiClient.post(`covers/${id}/approve`).json<CoverDTO>()),
  reject: (id: string) => withApiError(apiClient.post(`covers/${id}/reject`).json<CoverDTO>()),
};
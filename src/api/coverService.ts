import { createResourceClient } from './api';
import { type CreateCoverDTO, type CoverDTO  } from './api.d';

const client = createResourceClient('covers');

export const coverService = {
  getAll: () => client.getAll<CoverDTO[]>(),
  getById: (id: string) => client.getById<CoverDTO>(id),
  create: (data: CreateCoverDTO) => client.create<CreateCoverDTO, CoverDTO>(data),
  update: (id: string, data: CreateCoverDTO) => client.update<CreateCoverDTO, CoverDTO>(id, data),
  delete: (id: string) => client.delete(id),
};
import { createResourceClient } from './api';
import { type CreateSongDTO, type SongDTO  } from './api.d';

const client = createResourceClient('songs');

export const songService = {
  getAll: () => client.getAll<SongDTO[]>(),
  getById: (id: string) => client.getById<SongDTO>(id),
  create: (data: CreateSongDTO) => client.create<CreateSongDTO, SongDTO>(data),
  update: (id: string, data: CreateSongDTO) => client.update<CreateSongDTO, SongDTO>(id, data),
  delete: (id: string) => client.delete(id),
};
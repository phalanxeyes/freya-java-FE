import { mockSongs } from './dummydata';
import type { Song } from '@api/types';

const FAKE_DELAY = 400;

const delay = <T>(value: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(value), FAKE_DELAY));

export const songService = {
    getAll: (): Promise<Song[]> => delay(mockSongs),

    getById: (id: string): Promise<Song | undefined> =>
        delay(mockSongs.find((s: Song) => s.id === id)),
};
import { mockCovers } from './dummyData';
import type { Cover } from '@api/types';

const FAKE_DELAY = 400;

const delay = <T>(value: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(value), FAKE_DELAY));

export const coverService = {
    getAll: (): Promise<Cover[]> => delay(mockCovers),

    getById: (id: string): Promise<Cover | undefined> =>
        delay(mockCovers.find((c: Cover) => c.id === id)),
};
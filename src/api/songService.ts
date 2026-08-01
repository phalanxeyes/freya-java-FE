import { type Song } from './types';
import { mockSongs } from '@api/dummyData';

const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const songService = {
    getAll: async (): Promise<Song[]> => {
        await delay();
        return [...mockSongs];
    },
    getById: async (id: string): Promise<Song> => {
        await delay();
        const song = mockSongs.find(s => s.id === id);
        if (!song) throw new Error('Canción no encontrada');
        return song;
    }
};

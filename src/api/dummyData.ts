// src/mocks/songs.ts
import { type Song, type Album, type Artist, type Cover, type User } from '@api/types';

// ==========================================
// 1. DUMMY DATA: ARTISTAS
// ==========================================
export const mockArtists: Artist[] = [
    { id: 'artist-queen', name: 'Queen' },
    { id: 'artist-mj', name: 'Michael Jackson' },
    { id: 'artist-edsheeran', name: 'Ed Sheeran' },
    { id: 'artist-theweeknd', name: 'The Weeknd' }
];

// ==========================================
// 2. DUMMY DATA: USUARIOS
// ==========================================
export const mockUsers: User[] = [
    {
        id: 'user-1',
        name: 'Pepe Fernández',
        creationDate: new Date('2023-02-10'),
        email: 'pepe.fernandez@example.com'
    },
    {
        id: 'user-2',
        name: 'Lionel Mechi',
        creationDate: new Date('2022-08-15'),
        email: 'fifa.futbol.gol@example.com'
    },
    {
        id: 'user-3',
        name: 'Ariana Grande',
        creationDate: new Date('2024-01-03'),
        email: 'ariana.grande@example.com'
    }
];

// ==========================================
// 3. DUMMY DATA: ÁLBUMES
// ==========================================
export const mockAlbums: Album[] = [
    {
        id: 'album-anato',
        name: 'A Night at the Opera',
        date: new Date('1975-11-21'),
        artist: mockArtists[0]
    },
    {
        id: 'album-thriller',
        name: 'Thriller',
        date: new Date('1982-11-30'),
        artist: mockArtists[1]
    },
    {
        id: 'album-divide',
        name: '÷ (Divide)',
        date: new Date('2017-03-03'),
        artist: mockArtists[2]
    },
    {
        id: 'album-afterhours',
        name: 'After Hours',
        date: new Date('2020-03-20'),
        artist: mockArtists[3]
    }
];

// ==========================================
// 4. DUMMY DATA: CANCIONES
// ==========================================
export let mockSongs: Song[] = [
    {
        id: 'song-1',
        name: 'Bohemian Rhapsody',
        duration: 355,
        coverUrl: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b',
        artist: mockArtists[0],
        album: mockAlbums[0],
        lyrics: `Is this the real life? Is this just fantasy?
Caught in a landslide, no escape from reality
Open your eyes, look up to the skies and see
I'm just a poor boy, I need no sympathy...`
    },
    {
        id: 'song-2',
        name: 'Billie Jean',
        duration: 294,
        coverUrl: 'https://i.scdn.co/image/ab67616d00001e0232a7d87248d1b75463483df5',
        artist: mockArtists[1],
        album: mockAlbums[1],
        lyrics: `She was more like a beauty queen from a movie scene
I said don't mind, but what do you mean, I am the one
Who will dance on the floor in the round?...`
    },
    {
        id: 'song-3',
        name: 'Shape of You',
        duration: 233,
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png',
        artist: mockArtists[2],
        album: mockAlbums[2],
        lyrics: `The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots...`
    },
    {
        id: 'song-4',
        name: 'Hotel California',
        duration: 390,
        coverUrl: "https://images.genius.com/57dcfee5faf95afcb7b5f5a8361e137a.1000x1000x1.png",
        artist: { id: 'artist-eagles', name: 'The Eagles' },
        lyrics: `On a dark desert highway, cool wind in my hair
Warm smell of colitas, rising up through the air...`
    },
    {
        id: 'song-5',
        name: 'Blinding Lights',
        duration: 200,
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
        artist: mockArtists[3],
        album: mockAlbums[3],
        lyrics: `Yeah... I've been tryna call
I've been on my own for long enough
Maybe you can show me how to love, maybe...`
    }
];

// Relación inversa álbum -> canciones
mockAlbums[0].songs = [mockSongs[0]];
mockAlbums[1].songs = [mockSongs[1]];
mockAlbums[2].songs = [mockSongs[2]];
mockAlbums[3].songs = [mockSongs[4]];

// ==========================================
// 5. DUMMY DATA: COVERS
// ==========================================
export const mockCovers: Cover[] = [
    {
        id: 'cover-1',
        song: mockSongs[0], // Bohemian Rhapsody
        youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        duration: 362,
        publishDate: new Date('2023-05-14'),
        uploader: mockUsers[0]
    },
    {
        id: 'cover-2',
        song: mockSongs[0], // otro cover de la misma canción
        youtubeUrl: 'https://youtu.be/QkCxE2Lh458',
        duration: 340,
        publishDate: new Date('2024-01-22'),
        uploader: mockUsers[1]
    },
    {
        id: 'cover-3',
        song: mockSongs[1], // Billie Jean
        youtubeUrl: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
        duration: 289,
        publishDate: new Date('2022-11-30'),
        uploader: mockUsers[2]
    },
    {
        id: 'cover-4',
        song: mockSongs[4], // Blinding Lights
        youtubeUrl: null, // ejemplo sin video todavía
        duration: 205,
        publishDate: new Date('2024-06-08'),
        uploader: mockUsers[0]
    }
];

// Relación inversa canción -> covers
mockSongs[0].covers = [mockCovers[0], mockCovers[1]];
mockSongs[1].covers = [mockCovers[2]];
mockSongs[4].covers = [mockCovers[3]];
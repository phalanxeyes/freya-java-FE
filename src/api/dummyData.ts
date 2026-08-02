import { type Song, type Album, type Artist } from '@api/types';

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
// 2. DUMMY DATA: ÁLBUMES
// ==========================================
export const mockAlbums: Album[] = [
    {
        id: 'album-anato',
        name: 'A Night at the Opera',
        date: new Date('1975-11-21'),
        artist: mockArtists[0] // Queen
    },
    {
        id: 'album-thriller',
        name: 'Thriller',
        date: new Date('1982-11-30'),
        artist: mockArtists[1] // Michael Jackson
    },
    {
        id: 'album-divide',
        name: '÷ (Divide)',
        date: new Date('2017-03-03'),
        artist: mockArtists[2] // Ed Sheeran
    },
    {
        id: 'album-afterhours',
        name: 'After Hours',
        date: new Date('2020-03-20'),
        artist: mockArtists[3] // The Weeknd
    }
];

// ==========================================
// 3. DUMMY DATA: CANCIONES (Completadas)
// ==========================================
export let mockSongs: Song[] = [
    {
        id: 'song-1',
        name: 'Bohemian Rhapsody',
        duration: 355,
        coverUrl: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b', // Foto de stock abstracta
        artist: mockArtists[0], // Queen
        album: mockAlbums[0],    // A Night at the Opera
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
        artist: mockArtists[1], // Michael Jackson
        album: mockAlbums[1],    // Thriller
        lyrics: `She was more like a beauty queen from a movie scene
I said don't mind, but what do you mean, I am the one
Who will dance on the floor in the round?...`
    },
    {
        id: 'song-3',
        name: 'Shape of You',
        duration: 233,
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png',
        artist: mockArtists[2], // Ed Sheeran
        album: mockAlbums[2],    // Divide
        lyrics: `The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots...`
    },
    {
        id: 'song-4',
        name: 'Hotel California',
        duration: 390,
        coverUrl: "https://images.genius.com/57dcfee5faf95afcb7b5f5a8361e137a.1000x1000x1.png", // Ejemplo con null como pide tu interfaz
        artist: { id: 'artist-eagles', name: 'The Eagles' }, // Artista single sin álbum mockeado
        lyrics: `On a dark desert highway, cool wind in my hair
Warm smell of colitas, rising up through the air...`
    },
    {
        id: 'song-5',
        name: 'Blinding Lights',
        duration: 200,
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
        artist: mockArtists[3], // The Weeknd
        album: mockAlbums[3],    // After Hours
        lyrics: `Yeah... I've been tryna call
I've been on my own for long enough
Maybe you can show me how to love, maybe...`
    }
];

// Asignamos las canciones de vuelta a los álbumes para cumplir la relación inversa
mockAlbums[0].songs = [mockSongs[0]]; // Bohemian Rhapsody en A Night at the Opera
mockAlbums[1].songs = [mockSongs[1]]; // Billie Jean en Thriller
mockAlbums[2].songs = [mockSongs[2]]; // Shape of You en Divide
mockAlbums[3].songs = [mockSongs[3]]; // Blinding Lights en After Hours
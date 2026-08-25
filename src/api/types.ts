export interface Artist {
    id: string;
    name: string;
}

export interface Album {
    id: string;
    name: string;
    date: Date | string;
    artist?: Artist;
}

export interface User {
    id: string;
    name: string;
    email: string;
    creationDate: Date | string;
}

export interface Song {
    id: string;
    name: string;
    duration: number;
    lyrics: string;
    coverUrl: string | null;
    artist?: Artist;
    album?: Album;
    covers?: Cover[];
}

export interface Cover {
    id: string;
    duration: number;
    youtubeUrl: string | null;
    uploader: User;
    publishDate: Date | string;
    song: Song;
    likes?: number;
}

export interface AuthResponse {
    token: string;
    user: User;
}
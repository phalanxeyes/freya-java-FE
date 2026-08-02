export interface Song {
    id: string;
    duration: number;
    name: string;
    lyrics: string;
    coverUrl: string | null;
    artist?: Artist;
    album?: Album;
}

export interface Album {
    id: string;
    name: string;
    date: Date;
    artist?: Artist;
    songs?: Song[];
}

export interface Artist {
    id: string;
    name: string;
    albums?: Album[];
}
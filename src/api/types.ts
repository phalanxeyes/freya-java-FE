export interface Song {
    id: string;
    duration: number;
    name: string;
    lyrics: string;
    coverUrl: string | null;
    artist?: Artist;
    album?: Album;
    covers?: Cover[];
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

export interface Cover {
    id: string;
    song?: Song;
    youtubeUrl: string | null;
    duration: number;
    publishDate: Date;
}
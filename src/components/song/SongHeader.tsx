import { Link } from "react-router";
import type { Song } from "@api/types";

interface SongHeaderProps {
    song: Song;
}

const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function SongHeader({ song }: SongHeaderProps) {
    return (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-lg bg-amber-100 shadow-md sm:h-56 sm:w-56">
                <img
                    src={song.coverUrl ?? "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-28.jpg"}
                    alt={song.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                    Canción
                </p>
                <h1 className="mt-1 truncate text-3xl font-bold text-neutral-900 sm:text-4xl">
                    {song.name}
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-neutral-600">
                    {song.artist && (
                        <Link
                            to={`/artist/${song.artist.id}`}
                            className="font-medium text-neutral-900 hover:underline"
                        >
                            {song.artist.name}
                        </Link>
                    )}
                    {song.album && (
                        <>
                            <span className="text-neutral-400">·</span>
                            <Link to={`/album/${song.album.id}`} className="hover:underline">
                                {song.album.name}
                            </Link>
                        </>
                    )}
                    <span className="text-neutral-400">·</span>
                    <span>{formatDuration(song.duration)}</span>
                </div>
            </div>
        </div>
    );
}
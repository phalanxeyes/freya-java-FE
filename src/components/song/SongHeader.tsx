import type { SongDTO } from "@api/api.d";

interface SongHeaderProps {
    song: SongDTO;
}

const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function SongHeader({ song }: SongHeaderProps) {
    return (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-2xl bg-olive-bark-100 shadow-lg shadow-espresso-900/10 ring-1 ring-olive-bark-500/15 sm:h-56 sm:w-56">
                <img
                    src="https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-28.jpg"
                    alt={song.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-espresso-700">
                    Canción
                </p>
                <h1 className="mt-1 truncate text-3xl font-bold text-espresso-900 sm:text-4xl">
                    {song.name}
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-dusty-olive-700">
                    <span className="text-olive-bark-500">·</span>
                    <span>{formatDuration(song.duration)}</span>
                </div>
            </div>
        </div>
    );
}
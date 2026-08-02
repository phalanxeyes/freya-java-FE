import { Link } from "react-router";

interface SongCardProps {
    id: string;
    duration: number;
    name: string;
    coverUrl: string | null;
}

const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function SongCard({ id, duration, name, coverUrl }: SongCardProps) {
    return (
        <div className="w-full max-w-[200px] rounded-lg bg-white/60 p-4 shadow-sm ring-1 ring-amber-900/5 backdrop-blur-sm transition-all hover:bg-white hover:shadow-md group">
            <Link
                to={"/song/" + id}
                title={name}
                className="relative block aspect-square w-full overflow-hidden rounded bg-amber-100 shadow-sm"
            >
                <img
                    src={coverUrl ?? "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-28.jpg"}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="mt-3">
                <h3 className="truncate text-sm font-semibold text-neutral-900" title={name}>
                    {name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                    {formatDuration(duration)}
                </p>
            </div>
        </div>
    );
}
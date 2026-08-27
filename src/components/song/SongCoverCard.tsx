// src/components/song/SongCoverCard.tsx
import { Link } from "react-router";
import type { CoverDTO } from "@api/api.d";

interface SongCoverCardProps {
    cover: CoverDTO;
}

const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function SongCoverCard({ cover }: SongCoverCardProps) {
    return (
        <Link to={`/cover/${cover.id}`} className="group block w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded bg-amber-100">
                <div className="flex h-full w-full items-center justify-center text-xs text-amber-800/50">
                    {cover.song.name}
                </div>
                <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white">
                    {formatDuration(cover.duration)}
        </span>
            </div>

            <p className="mt-2 truncate text-xs text-neutral-600">
                Publicado el{" "}
                <span className="font-medium text-neutral-900">
                    {new Date(cover.createdAt).toLocaleDateString("es-AR")}
                </span>
            </p>
        </Link>
    );
}
import { Link } from "react-router";
import type { Cover } from "@api/types";

interface SongCoverCardProps {
    cover: Cover;
}

function getYoutubeId(url: string): string | null {
    const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

export default function SongCoverCard({ cover }: SongCoverCardProps) {
    const videoId = cover.youtubeUrl ? getYoutubeId(cover.youtubeUrl) : null;
    const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : null;

    return (
        <Link to={`/cover/${cover.id}`} className="group block w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded bg-amber-100">
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt="Cover"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-amber-800/50">
                        Sin video
                    </div>
                )}
            </div>
        </Link>
    );
}
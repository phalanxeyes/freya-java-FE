import type { CoverDTO } from "@api/api.d";
import SongCoverCard from "@components/song/SongCoverCard";

interface SongCoversProps {
    covers: CoverDTO[];
}

export default function SongCovers({ covers }: SongCoversProps) {
    if (covers.length === 0) return null;

    return (
        <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Covers
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {covers.map((cover) => (
                    <SongCoverCard key={cover.id} cover={cover} />
                ))}
            </div>
        </div>
    );
}
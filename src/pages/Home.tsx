import { useEffect, useState } from 'react'
import SongCard from '@components/song/SongCard.tsx'
import SongCoverCard from '@components/song/SongCoverCard.tsx'
import Carousel from '@components/Carousel.tsx'
import { songService } from '@api/songService'
import { coverService } from '@api/coverService'
import type { Song, Cover } from '@api/types'
import LoadingState from "@components/LoadingState.tsx";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [songs, setSongs] = useState<Song[]>([]);
    const [covers, setCovers] = useState<Cover[]>([]);

    useEffect(() => {
        setLoading(true);
        Promise.all([songService.getAll(), coverService.getAll()]).then(
            ([songsResult, coversResult]) => {
                setSongs(songsResult);
                setCovers(
                    [...coversResult].sort(
                        (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
                    )
                );
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return <LoadingState />;
    }

    return (
        <div className="space-y-10">
            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                    Canciones
                </h2>
                <div className="mt-3">
                    <Carousel speed={230}>
                        {songs.map((song) => (
                            <div key={song.id} className="w-36 sm:w-44">
                                <SongCard
                                    id={song.id}
                                    duration={song.duration}
                                    name={song.name}
                                    coverUrl={song.coverUrl}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                    Últimos covers
                </h2>
                <div className="mt-3">
                    <Carousel speed={210}>
                        {covers.map((cover) => (
                            <div key={cover.id} className="w-56">
                                <SongCoverCard cover={cover} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    )
}
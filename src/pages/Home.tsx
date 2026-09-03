import { useEffect, useState } from 'react'
import SongCard from '@components/song/SongCard.tsx'
import SongCoverCard from '@components/song/SongCoverCard.tsx'
import Carousel from '@components/Carousel.tsx'
import { songService } from '@api/songService'
import { coverService } from '@api/coverService'
import type { CoverDTO, SongDTO } from '@api/api.d'
import LoadingState from "@components/LoadingState.tsx";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [songs, setSongs] = useState<SongDTO[]>([]);
    const [covers, setCovers] = useState<CoverDTO[]>([]);

    useEffect(() => {
        setLoading(true);
        Promise.all([songService.getAll(), coverService.getAll()]).then(
            ([songsResult, coversResult]) => {
                setSongs(songsResult);
                setCovers(
                    [...coversResult].sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
        <div className="space-y-12">
            <header className="max-w-3xl rounded-3xl bg-espresso-800 px-6 py-8 shadow-xl shadow-espresso-900/25 sm:px-10 sm:py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-olive-bark-300">
                    Tu espacio musical
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-sand-50 sm:text-5xl">
                    Escuchá, reversioná, compartí.
                </h1>
            </header>

            <section>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso-700">
                    Canciones
                </p>
                <div className="mt-3">
                    <Carousel speed={15}>
                        {songs.map((song) => (
                            <div key={song.id} className="w-36 sm:w-44">
                                <SongCard
                                    id={song.id}
                                    duration={song.duration}
                                    name={song.name}
                                    imgUrl={song.album.coverUrl}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso-700">
                    Últimos covers
                </p>
                <div className="mt-3">
                    <Carousel speed={20}>
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
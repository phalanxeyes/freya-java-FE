import { useEffect, useState } from 'react'
import SongCard from '@components/song/SongCard.tsx'
import { songService } from '@api/songService'
import type { Song } from '@api/types'
import LoadingState from "@components/LoadingState.tsx";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true);
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        setLoading(true)
        songService.getAll().then((songs: Song[]) => {
            setSongs(songs);
            setLoading(false)
        })
    }, [])

    if(loading){
        return(
            <div>
                <LoadingState></LoadingState>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {songs.map((song: Song) => (
                <SongCard
                    id={song.id}
                    key={song.id}
                    duration={song.duration}
                    name={song.name}
                    coverUrl={song.coverUrl}
                />
            ))}
        </div>
    )
}
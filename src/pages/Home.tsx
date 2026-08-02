import { useEffect, useState } from 'react'
import SongCard from '@components/SongCard'
import { songService } from '@api/songService'
import type { Song } from '@api/types'

export default function Home() {
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        songService.getAll().then((songs: Song[]) => {
            setSongs(songs);
        })
    }, [])

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
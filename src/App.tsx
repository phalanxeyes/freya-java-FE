import {useEffect, useState} from 'react'
import SongCard from '@components/SongCard'
import {songService} from '@api/songService'
import type {Song} from "@api/types.ts";


function App() {
  const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        songService.getAll().then((songs: Song[]) => {
            setSongs(songs);
        })
    }, [])
  return (
      <div>
        <h1 className="text-3xl font-bold underline text-cyan-300">
          Hello world!
        </h1>
          <div>
              {songs.map((song: Song) => (<SongCard duration={song.duration} name={song.name}> </SongCard>))}
          </div>
      </div>
  )
}

export default App

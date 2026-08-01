import { useState } from 'react'
import SongCard from '@components/SongCard'


function App() {
  //const [songCards, setSongCards] = useState([])

  return (
      <div>
        <h1 className="text-3xl font-bold underline text-cyan-300">
          Hello world!
        </h1>
        <SongCard name={ "pepe" }></SongCard>
        <SongCard name={ "scatman" }></SongCard>
      </div>
  )
}

export default App

import { Routes, Route, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../css/App.css'
import Nav from './Nav'
import RegionSelector from './RegionSelector'
import Game from './Game'

function App() {
  const [ region, setRegion ] = useState('')

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<RegionSelector />} />
        <Route path="/:region" element={<Game setRegion={setRegion} />} />
      </Routes>
    </main>
  );
}

export default App;

import { Routes, Route, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../css/App.css'
import Home from './Home'
import Region from './Region'

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:region" element={<Region />} />
      </Routes>
    </main>
  );
}

export default App;

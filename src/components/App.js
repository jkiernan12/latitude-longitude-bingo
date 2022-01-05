import { Routes, Route, useParams } from 'react-router-dom'
import '../css/App.css';
import Nav from './Nav'
import RegionSelector from './RegionSelector'
import Game from './Game'

function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<RegionSelector />} />
        <Route path="/:region" element={<Game />} />
      </Routes>
    </main>
  );
}

export default App;

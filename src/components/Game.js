import '../css/Game.css';
import GameBoard from './GameBoard'
import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// class Game extends Component {
//     constructor() {
//       super()
//       this.state = {
//         // Called Coordinates
//       }
//     }

//     // Fetch, Evaluate Win

    
//     render() {
//       return (
//         <div className="Game">
//             <p>this is the Game section</p>
//         </div>
//       );
//     }
//   }

function Game({ setRegion }) {
  let region = useParams().region

  useEffect(() => {
    setRegion(region);
  }, [region]);
  
  return (
      <div className="Game">
          <p>{region}</p>
          <section className="coordinates">
            <h3>Lat</h3>
            <h3>Long</h3>
            <button className="next-btn">Next Coordinates</button>
          </section>
          <GameBoard />
          <button className="bingo-btn">Bingo / Reset</button>
      </div>
  )
}

export default Game;
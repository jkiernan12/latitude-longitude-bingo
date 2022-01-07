import '../css/Game.css';
import GameBoard from './GameBoard'
import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameMap from './GameMap';

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

function Game({ region }) {
  // let region = useParams().region

  // useEffect(() => {
  //   setRegion(region);
  // }, [region]);
  
  return (
      <div className="Game">
        <section className="Game-space">
          <p>{region}</p>
          <section className="coordinates">
            <h3>Lat</h3>
            <h3>Long</h3>
            <button className="next-btn">Next Coordinates</button>
          </section>
          <GameBoard />
          <button className="bingo-btn">Bingo / Reset</button>
        </section>
        <GameMap />
      </div>
  )
}

export default Game;
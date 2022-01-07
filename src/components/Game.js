import '../css/Game.css';
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

function Game({ setRegion }) {
  let region = useParams().region

  useEffect(() => {
    setRegion(region);
  }, [region]);
  
  return (
      <div className="Game">
        <section className="Game-space">
          <p>{region}</p>
        </section>
          <GameMap />
      </div>
  )
}

export default Game;
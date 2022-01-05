import '../css/Game.css';
import React, { Component } from 'react'
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

function Game() {
    let region = useParams().region
    console.log(region)
    return (
        <div className="Game">
            <p>this is the Game section</p>
        </div>
    )
}

export default Game;
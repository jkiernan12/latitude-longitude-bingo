import '../css/Game.css';
import GameBoard from './GameBoard'
import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameMap from './GameMap';
import { fetchCountryData } from '../apiCalls'

class Game extends Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: []
      }
    }

  componentDidMount = () => {
    fetchCountryData()
      .then(data => this.setState({ countries: data }))
  }

  render(){
    return (
      <div className="Game">
        <section className="Game-space">
          <p>{this.props.region}</p>
          <section className="coordinates">
            <h3>Lat</h3>
            <h3>Long</h3>
            <button className="next-btn">Next Coordinates</button>
          </section>
          <GameBoard />
          <button className="bingo-btn">Bingo / Reset</button>
        </section>
        <GameMap region={this.props.region} />
      </div>
    )
  }
}

export default Game;

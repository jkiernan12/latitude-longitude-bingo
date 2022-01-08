import '../css/Game.css';
import GameBoard from './GameBoard'
import React, { Component } from 'react'
import dummyCountries from '../dummyData';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRegion: this.props.region,
      currentRegionCountries: [],
      currentLat: 'N/S',
      currentLong: 'E/W',
      nextBtnTxt: 'Get Coordinates',
      bingoBtnTxt: 'BINGO!',
      calledCoordinates: [],
      currentBoard: [],
      // TBDeleted:
    }
  }

  getCoordinates() {
    console.log('heya')
  }

  getFilteredCountries() {
    let filterRegion = this.props.region

    if (this.props.region === 'australia-oceania') {
      filterRegion = 'oceania'
    } else if (this.props.region === 'north-america') {
      filterRegion = 'north america'
    } else if (this.props.region === 'south-america') {
      filterRegion = 'south america'
    }

    let filteredCountries = dummyCountries.filter(country => {
      let countryRegions = country.regions.data;
      let lowerCaseRegions = countryRegions.map(region => {
        return region.toLowerCase()
      })
      return lowerCaseRegions.includes(filterRegion)
    })

    if (this.props.region === 'world') {
      filteredCountries = dummyCountries
    }

    return filteredCountries
  }

  componentDidUpdate() {
    if (this.state.currentRegion !== this.props.region) {
      this.setState({
        currentRegion: this.props.region,
        currentRegionCountries: this.getFilteredCountries()
      })
    }
  }

  componentDidMount() {
    this.setState({
      currentRegionCountries: this.getFilteredCountries()
    })
    /* 
    On page load:
    1) Fetch all countries for region
    2) Send 16 countries to gameboard (set as currentBoard)
    */

  }
    
  render() {
    return (
      <div className="Game">
          <p>{this.state.currentRegion}</p>
          <section className="coordinates">
            <h3>{this.state.currentLat}</h3>
            <h3>{this.state.currentLong}</h3>
            <button className="next-btn" onClick={this.getCoordinates}>{this.state.nextBtnTxt}</button>
          </section>
          <GameBoard squares={this.state.currentBoard}/>
          <button className="bingo-btn">{this.state.bingoBtnTxt}</button>
      </div>
    )
    }
}

export default Game;
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
      bingoBtnTxt: 'Set Game Board!',
      calledCoordinates: [],
      currentBoard: [],
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

  handleBingoClick() {
    this.state.bingoBtnTxt === 'Set Game Board!' ? this.setGameBoard() : this.evaluateBoard()
  }

  getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  setGameBoard() {
    let squareCountries = []

    while (squareCountries.length < 16) {
      let randomIndex = this.getRandomIndex(this.state.currentRegionCountries)
      let randomCountry = this.state.currentRegionCountries[randomIndex]
      !squareCountries.includes(randomCountry) && squareCountries.push(randomCountry)
    }

    this.setState({
      currentBoard: squareCountries,
      bingoBtnTxt: 'BINGO!'
    })
  }

  evaluateBoard() {
    console.log('check for win')
  }

  componentDidUpdate() {
    if (this.state.currentRegion !== this.props.region) {
      this.setState({
        currentRegion: this.props.region,
        currentRegionCountries: this.getFilteredCountries(),
        currentLat: 'N/S',
        currentLong: 'E/W',
        nextBtnTxt: 'Get Coordinates',
        bingoBtnTxt: 'Set Game Board!',
        calledCoordinates: [],
        currentBoard: [],
      })
    }
  }

  componentDidMount() {
    this.setState({
      currentRegionCountries: this.getFilteredCountries()
    })
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
          <button className="bingo-btn" onClick={() => this.handleBingoClick()}>{this.state.bingoBtnTxt}</button>
      </div>
    )
    }
}

export default Game;
import '../css/Game.css';
import GameBoard from './GameBoard'
import React, { Component } from 'react'
import GameMap from './GameMap'
import { fetchCountryData } from '../apiCalls';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCountries: [],
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

  getCoordinates = () => {
    let randomIndex = this.getRandomIndex(this.state.currentRegionCountries)
    let randomCountry = this.state.currentRegionCountries[randomIndex]
    while (this.state.calledCoordinates.includes(randomCountry)) {
      randomIndex = this.getRandomIndex(this.state.currentRegionCountries)
      randomCountry = this.state.currentRegionCountries[randomIndex]
    }

    let latNum = randomCountry.latitude
    let latDir = 'N'
    let longNum = randomCountry.longitude
    let longDir = 'E'
    
    if (latNum < 0) {
      latNum = latNum * -1
      latDir = 'S'
    }
    if (longNum < 0) {
      longNum = longNum * -1
      longDir = 'W'
    }

    console.log('called country: ', randomCountry.name)

    this.setState({
      currentLat: latNum + latDir,
      currentLong: longNum + longDir,
      calledCoordinates: [...this.state.calledCoordinates, randomCountry]
    })
  }

  setFilteredCountries() {
    let filterRegion = this.props.region

    if (this.props.region === 'australia-oceania') {
      filterRegion = 'oceania'
    } else if (this.props.region === 'north-america') {
      filterRegion = 'north america'
    } else if (this.props.region === 'south-america') {
      filterRegion = 'south america'
    }

    let filteredCountries = this.state.allCountries.filter(country => {
      let countryRegions = country.regions.data;
      let lowerCaseRegions = countryRegions.map(region => {
        return region.toLowerCase()
      })
      return lowerCaseRegions.includes(filterRegion)
    })

    if (this.props.region === 'world') {
      filteredCountries = this.state.allCountries
    }

    this.setState({
      currentRegionCountries: filteredCountries
    })
  }

  handleBingoClick() {
    this.state.bingoBtnTxt === 'Set Game Board!' ? this.setGameBoard() : this.evaluateBoard()
  }

  getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  setGameBoard() {    
    let randomCountries = []

    while (randomCountries.length < 16) {
      let randomIndex = this.getRandomIndex(this.state.currentRegionCountries)
      let randomCountry = this.state.currentRegionCountries[randomIndex]
      !randomCountries.includes(randomCountry) && randomCountries.push(randomCountry)
    }

    let squareCountries = randomCountries.map((randomCountry, index) => {
      return {
        name: randomCountry.name,
        id: randomCountry.id,
        flag_path: randomCountry.flag_path,
        space: index,
        stampStatus: 'not-stamped'
      }
    })

    this.setState({
      currentBoard: squareCountries,
      bingoBtnTxt: 'BINGO!'
    })
  }

  evaluateBoard() {
    console.log('check for win')
  }

  stampSquare(id, square) {
    console.log('this square was stamped: ', square)
    console.log('this id was stamped: ', id)

    this.setState(prevState => {
      return prevState.currentBoard[square].stampStatus = 'stamped'
    })
  }

  componentDidUpdate() {
    if (this.state.currentRegion !== this.props.region) {
      this.setState({
        currentRegion: this.props.region,
        currentLat: 'N/S',
        currentLong: 'E/W',
        nextBtnTxt: 'Get Coordinates',
        bingoBtnTxt: 'Set Game Board!',
        calledCoordinates: [],
        currentBoard: [],
      })
      this.setFilteredCountries()
    }
  }

  componentDidMount() {
    fetchCountryData()
      .then(data => this.setState({
        allCountries: data
      }))
      .then(() => this.setFilteredCountries())
  }
    
  render() {
    return (
      <div className="Game">
        <section className="GameSpace">
          <p>{this.state.currentRegion}</p>
          <section className="coordinates">
            <h3>{this.state.currentLat}</h3>
            <h3>{this.state.currentLong}</h3>
            <button className="next-btn" onClick={this.getCoordinates}>{this.state.nextBtnTxt}</button>
          </section>
          <GameBoard squares={this.state.currentBoard} stamp={(id, space) => this.stampSquare(id, space)}/>
          <button className="bingo-btn" onClick={() => this.handleBingoClick()}>{this.state.bingoBtnTxt}</button>
        </section>
        <GameMap region={this.props.region}/>
      </div>
    )
  }
}

export default Game;

import '../css/Game.css'
import GameBoard from './GameBoard'
import React, { Component } from 'react'
import GameMap from './GameMap'
import { fetchCountryData } from '../apiCalls'
import { winningBoards, getRandomList } from '../utils'
import EndGameModal from './EndGameModal'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

ReactModal.setAppElement(document.getElementById('root'))

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCountries: [],
      currentRegion: this.props.region,
      currentRegionCountries: [],
      currentLat: 'N/S',
      currentLong: 'E/W',
      getBtnIsDisabled: true,
      bingoBtnTxt: 'Set Game Board!',
      calledCoordinateIds: [],
      currentBoard: [],
      winStatus: '',
      showModal: false
    }
  }

  getCoordinates = () => {
    if (this.state.calledCoordinateIds.length === this.state.currentRegionCountries.length) {
      this.setState({winStatus: 'That\'s all the countries for this region! Please play again!'})
      this.endGame()
    } else {
      let randomCountry = getRandomList(this.state.currentRegionCountries, 1)[0]
        while (this.state.calledCoordinateIds.includes(randomCountry.id)) {
          randomCountry = getRandomList(this.state.currentRegionCountries, 1)[0]
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
          calledCoordinateIds: [...this.state.calledCoordinateIds, randomCountry.id]
        })
    }
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
      let countryRegions = country.regions.data
      let lowerCaseRegions = countryRegions.map(region => {
        return region.toLowerCase()
      })
      return lowerCaseRegions.includes(filterRegion)
    })

    if (this.props.region === 'world') {
      filteredCountries = this.state.allCountries
    }

    let maxCountries = (filteredCountries.length < 20) ? filteredCountries.length : 20

    this.setState({
      currentRegionCountries: getRandomList(filteredCountries, maxCountries)
    })
  }

  handleBingoClick() {
    this.state.error ? this.setState({showModal: true}) :
    this.state.bingoBtnTxt === 'Set Game Board!' && this.setGameBoard()
    this.state.bingoBtnTxt === 'BINGO!' && this.evaluateBoard()
    this.state.bingoBtnTxt === 'Reset Board' && this.resetGame()
  }

  setGameBoard() {
    let randomCountries = getRandomList(this.state.currentRegionCountries, 16)

    let squareCountries = randomCountries.map((randomCountry, index) => {
      return {
        name: randomCountry.name,
        id: randomCountry.id,
        flag_path: randomCountry.flag_path,
        space: index,
        isStamped: false,
        correct: null
      }
    })

    this.setState({
      getBtnIsDisabled: false,
      bingoBtnTxt: 'BINGO!',
      currentBoard: squareCountries
    })
  }

  evaluateBoard() {
    let stampedSquares = this.state.currentBoard.filter(square => {
      return square.isStamped
    }).map(square => {
      return square.space
    })

    let wins = []
    winningBoards.forEach(winBoard => {
      let match = []
      winBoard.forEach(square => {
        match.push(stampedSquares.includes(square))
      })
      !match.includes(false) && wins.push(winBoard)
    })

    if (!wins.length) {
      this.setState({
        winStatus: 'Keep playing - try to get four in a row!',
        showModal: true
      })
    } else {
      let errors = 0
        wins.forEach(win => {
          win.forEach(square => {
            if (this.state.calledCoordinateIds.includes(this.state.currentBoard[square].id)) {
              this.setState(prevState => {
                return prevState.currentBoard[square].correct = true
              })
            } else {
              errors += 1
              this.setState({winStatus: 'Oops! Not all of those countries were called - check the board for details'})
              this.setState(prevState => {
                return prevState.currentBoard[square].correct = false
              })
            }
          })
        })
        errors === 0 && this.setState({winStatus: 'Congrats! You got a BINGO!'})
        this.endGame()
    }
  }

  stampSquare(id, square) {
    if (this.state.currentBoard.length) {
      this.setState(prevState => {
        return prevState.currentBoard[square].isStamped = !prevState.currentBoard[square].isStamped
      })
    }
  }

  endGame = () => {
    this.setState({
      getBtnIsDisabled: true,
      bingoBtnTxt: 'Reset Board',
      showModal: true
    })
  }

  resetGame = () => {
    this.setGameBoard()
    this.setState({
      currentLat: 'N/S',
      currentLong: 'E/W',
      calledCoordinateIds: [],
      winStatus: ''
    })
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  componentDidUpdate() {
    if (this.state.currentRegion !== this.props.region) {
      this.setState({
        currentRegion: this.props.region,
        currentLat: 'N/S',
        currentLong: 'E/W',
        getBtnIsDisabled: true,
        bingoBtnTxt: 'Set Game Board!',
        calledCoordinateIds: [],
        currentBoard: [],
        winStatus: ''
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
      .catch(err =>
        {
          let message = 'Oops! There was a problem. Please check your internet connection or try again later.'
          this.setState({
            error: message,
            showModal: true
          })
        }
      )
  }

  render() {
    return (
      <div className="Game">
        <section className="GameSpace">
          <EndGameModal isOpen={this.state.showModal} message={this.state.error ? this.state.error : this.state.winStatus} close={this.closeModal}></EndGameModal>
          <section className="coordinates">
            <h3>Latitude: {this.state.currentLat}</h3>
            <h3>Longitude: {this.state.currentLong}</h3>
            <button className={this.state.currentLat === 'N/S' && this.state.bingoBtnTxt !== 'Set Game Board!' ? "next-btn animate-pulse" : "next-btn"} onClick={this.getCoordinates} disabled={this.state.getBtnIsDisabled}>Get Coordinates</button>
          </section>
          <GameBoard squares={this.state.currentBoard} stamp={(id, space) => this.stampSquare(id, space)}/>
          <button className={this.state.bingoBtnTxt === 'Set Game Board!' ? "bingo-btn animate-pulse" : "bingo-btn"} onClick={() => this.handleBingoClick()}>{this.state.bingoBtnTxt}</button>
        </section>
        <GameMap className="game-map" region={this.props.region}/>
      </div>
    )
  }
}

export default Game

Game.propTypes = {
  region: PropTypes.string.isRequired
}
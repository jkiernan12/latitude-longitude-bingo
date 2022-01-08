import '../css/GameBoard.css'
import Square from './Square'

const GameBoard = ({ squares }) => {

    let countries = squares.map(country => {
        return <Square key={country.id} name={country.name} />
    })

    return (
        <div className="board">
            {countries}
        </div>
    )
}

export default GameBoard;
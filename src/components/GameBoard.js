import '../css/GameBoard.css'
import Square from './Square'

const GameBoard = ({ squares, stamp }) => {

    let countries = squares.map(square => {
        return <Square key={square.id} id={square.id} className={`square square${square.space} ${square.isStamped} correct-${square.correct}`} space={square.space} name={square.name} flagPath={square.flag_path} stamp={stamp}/>
    })

    let spaces = []
    for (let i = 0; i < 16; i++) {
        spaces.push(<Square key={i} id={i} className={`square space false`} space={i} name={''} stamp={stamp}/>)
    }

    return (
        <div className="board">
            {squares.length ? 
                countries :
                spaces
            }
        </div>
    )
}

export default GameBoard;
import '../css/GameBoard.css'
import Square from './Square'

const GameBoard = () => {
    let fakeCountries = [
        "North Dakota", 
        "South Dakota", 
        "Nebraska", 
        "Kansas",
        "Oklahoma",
        "Texas",
        "Minnesota",
        "Iowa",
        "Arkansas",
        "Missouri",
        "Louisiana",
        "Michigan",
        "Indiana",
        "Ohio",
        "Illinois",
        "Pennsylvania"
    ]

    let countries = fakeCountries.map(fakeCountry => {
        return <Square name={fakeCountry} />
    })

    return (
        <div className="board">
            {countries}
        </div>
    )
}

export default GameBoard;
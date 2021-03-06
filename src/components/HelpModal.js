import ReactModal from 'react-modal'
import '../css/HelpModal.css'

function HelpModal({ isOpen, close}) {
    return (
        <ReactModal className="modal" isOpen={isOpen} parentSelector={() => document.querySelector('.Game')} contentLabel="Instructions">
            <div className='help'>
                <button className="close-btn" onClick={close}>🆇</button>
                <h3>How to Play:</h3>
                <p className="instructions">1. Click <span>"Set Game Board!"</span> at the bottom of the screen. You'll see country names and flags appear in the game board squares.</p>
                <p className="instructions">2. Click <span>"Get Coordinates"</span> above the game board. You'll see a set of coordinates appear.</p>
                <p className="instructions">3. Use the map to <span>find the country</span> at the given coordinates.</p>
                <p className="instructions">4. If that country appears on your game board, <span>click that square</span> and get the next set of coordinates. Hint: Not every country will be on your bingo board! Look carefully!</p>
                <p className="instructions">5. Once you have <span>four squares in a row</span> (row, column, or diagonal) push the "BINGO" button!</p>

                <button className="ok-btn" onClick={close}>OK</button>
            </div>
        </ReactModal>
    )
}

export default HelpModal

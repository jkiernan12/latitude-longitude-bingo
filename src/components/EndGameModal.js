import ReactModal from 'react-modal'
import '../css/EndGameModal.css'

function EndGameModal({ isOpen, message}) {
    return (
        <ReactModal isOpen={isOpen} parentSelector={() => document.querySelector('.Game')} contentLabel="End Game Message">
            <p>{message}</p>
        </ReactModal>
    )
}

export default EndGameModal
import ReactModal from 'react-modal'
import '../css/EndGameModal.css'

function EndGameModal({ isOpen, message, close}) {
    return (
        <ReactModal className="modal" isOpen={isOpen} parentSelector={() => document.querySelector('.Game')} contentLabel="End Game Message">
            <div className='modal-content'>
                <button className="close-btn" onClick={close}>🆇</button>
                <p>{message}</p>
            </div>
        </ReactModal>
    )
}

export default EndGameModal
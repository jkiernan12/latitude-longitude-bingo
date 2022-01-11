import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import '../css/EndGameModal.css'

function EndGameModal({ isOpen, message, close}) {
    return (
        <ReactModal className="modal" isOpen={isOpen} parentSelector={() => document.querySelector('.Game')} contentLabel="End Game Message">
            <div className='modal-content'>
                <button className="close-btn" onClick={close}>🆇</button>
                <p>{message}</p>
                <button className="ok-btn" onClick={close}>Ok</button>
            </div>
        </ReactModal>
    )
}

export default EndGameModal

EndGameModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string,
    close: PropTypes.func.isRequired
}

EndGameModal.defaultProps = {
    isOpen: false
}
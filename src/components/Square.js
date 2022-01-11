import PropTypes from 'prop-types';
import '../css/Square.css'

const Square = ({ id, className, space, name, stamp, flagPath }) => {

    return (
        <div className={className} onClick={() => stamp(id, space)}>
            <p className="country-name">{name}</p>
            <img className="flag-image" src={flagPath} />
        </div>
    )
}

export default Square;

Square.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    space: PropTypes.number,
    name: PropTypes.string,
    stamp: PropTypes.func,
    flagPath: PropTypes.string
}
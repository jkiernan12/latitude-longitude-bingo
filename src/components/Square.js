import '../css/Square.css';

const Square = ({ name }) => {
    return (
        <div className="square">
            <p>{name}</p>
        </div>
    )
}

export default Square;
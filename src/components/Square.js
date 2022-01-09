import '../css/Square.css';

const Square = ({ id, className, space, name, stamp }) => {
    return (
        <div className={className} onClick={() => stamp(id, space)}>
            <p>{name}</p>
        </div>
    )
}

export default Square;
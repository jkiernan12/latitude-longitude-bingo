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
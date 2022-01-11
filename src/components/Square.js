import '../css/Square.css'

const Square = ({ id, className, space, name, stamp, flagPath }) => {

    return (
        <div className={className} onClick={() => stamp(id, space)}>
            <p className="country-name">{name}</p>
            {flagPath &&  <img className="flag-image" alt={`Flag of ${name}`} src={flagPath} />}
        </div>
    )
}

export default Square;
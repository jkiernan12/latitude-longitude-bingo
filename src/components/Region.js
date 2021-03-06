import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Game from './Game'

function Region() {
    let { region } = useParams()

    return (
        <div>
            <Nav />
            <Game region={region} />
        </div>
    )
}

export default Region
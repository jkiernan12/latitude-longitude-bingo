import '../css/Home.css'
import { NavLink } from 'react-router-dom'
import continents from '../assets/images/Continents.svg'

const Home = () => {
    return (
        <div className='Home'>
            <h1 className='Home--header'>-Latitude- <br />|Longitude|<span className='Home--header__bold'><br />BINGO</span></h1>
            <h3>Please choose a region to get started!</h3>
            <div className='Home--links'>
              <NavLink to="/africa" className="Home--link">Africa</NavLink>
              <NavLink to="/asia" className="Home--link">Asia</NavLink>
              <NavLink to="/australia-oceania" className="Home--link">Australia & Oceania</NavLink>
              <NavLink to="/europe" className="Home--link">Europe</NavLink>
              <NavLink to="/north-america" className="Home--link">North America</NavLink>
              <NavLink to="/south-america" className="Home--link">South America</NavLink>
              <NavLink to="/world" className="Home--link">World</NavLink>
            </div>
            <img className='Home--continents' src={continents} alt="World map with continents" />
        </div>
    )
}

export default Home
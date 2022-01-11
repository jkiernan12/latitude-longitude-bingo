import '../css/Nav.css';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = () => {

    return (
        <nav className="navbar">
            <NavLink to="/" className="Nav--header__link">
            <h1 className='Nav--header'>-Latitude- |Longitude| <br /><span className='Nav--header__bold'>BINGO</span></h1>
            </NavLink>

            <div className="region-navs">
                <NavLink to="/africa" className="nav-link">Africa</NavLink>
                <NavLink to="/asia" className="nav-link">Asia</NavLink>
                <NavLink to="/australia-oceania" className="nav-link">Australia & Oceania</NavLink>
                <NavLink to="/europe" className="nav-link">Europe</NavLink>
                <NavLink to="/north-america" className="nav-link">North America</NavLink>
                <NavLink to="/south-america" className="nav-link">South America</NavLink>
                <NavLink to="/world" className="nav-link">World</NavLink>
                <NavLink to="/" className="nav-link nav-home-link">Home</NavLink>
            </div>
            
        </nav>
    )
}

export default Nav;
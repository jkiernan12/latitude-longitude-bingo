import '../css/Nav.css';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = ({ currentRegion, setCurrentRegion }) => {
    let region = useParams().region || currentRegion

    useEffect(() => {
        console.log(region)
        setCurrentRegion(region);
    }, []);
    
    return (
        <nav className="navbar">
            <h1>-Latitude- |Longitude| BINGO</h1>

            <div className="region-navs">
                <NavLink to="/africa" className="nav-link">Africa</NavLink>
                <NavLink to="/asia" className="nav-link">Asia</NavLink>
                <NavLink to="/australia-oceania" className="nav-link">Australia & Oceania</NavLink>
                <NavLink to="/europe" className="nav-link">Europe</NavLink>
                <NavLink to="/north-america" className="nav-link">North America</NavLink>
                <NavLink to="/south-america" className="nav-link">South America</NavLink>
                <NavLink to="/world" className="nav-link">World</NavLink>
            </div>
            
        </nav>
    )
}

export default Nav;
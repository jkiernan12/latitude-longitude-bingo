import '../css/Nav.css'
import { NavLink } from 'react-router-dom'
import HelpModal from './HelpModal'
import { useState } from 'react'

const Nav = () => {
    let [ modalIsOpen, setModalIsOpen ] = useState(false)

    return (
        <nav className="navbar">
            <NavLink to="/" className="Nav--header__link">
            <h1 className='Nav--header'>-Latitude- |Longitude|<span className='Nav--header__bold'>BINGO</span></h1>
            </NavLink>
            <button className="help-button" onClick={() => setModalIsOpen(true)}>How to play</button>
            <HelpModal isOpen={modalIsOpen} close={() => setModalIsOpen(false)}></HelpModal>

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
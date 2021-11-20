import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";




function Header() {

    

    return (
        <nav className="header">
            

            <div className="header__nav">

                <Link to="/about" className="header__link">
                        <span className="Header__optionline2">ROADMAP </span>
                </Link>

                <Link to="/locate" className="header__link">
                        <span className="Header__optionline2">Locate</span>
                </Link>

                <Link to="/Scan" className="header__link">
                        <span className="Header__optionline2">scan</span>
                </Link>

                <Link to="/Categorize" className="header__link">
                        <span className="Header__optionline2">categorize</span>
                </Link>

                <Link to="/Nursey" className="header__link">
                        <span className="Header__optionline2">nursery</span>
                </Link>

                <Link to="/Contact" className="header__link">
                        <span className="Header__optionline2">contact</span>
                </Link>
                <Link to="/Roadmap" className="header__link">
                        <span className="Header__optionline2">ABOUT</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header

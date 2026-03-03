import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import { NavBar } from './NavStyle'
import { Link } from 'react-router'

const Nav = () => {
    const [show, setShow] = useState(false)

    return (
        <NavBar>
            <div className="nav-top">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Company Logo" /></Link>
                </div>

                <div className="hamBtn" onClick={() => setShow(!show)}>
                    {show ? '✕' : '☰'}
                </div>
                <ul className="menu web-menu">
                    <Link to="/about"><li>About us</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/useCase"><li>Use Cases</li></Link>
                    <Link to="/pricing"><li>Pricing</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <button className="quoteBtn">Request a quote</button>
                </ul>
            </div>
            <ul className={`menu mob-menu ${show ? 'open' : ''}`}>
                <Link to="/about"><li onClick={() => setShow(false)}>About us</li></Link>
                <Link to="/services"><li onClick={() => setShow(false)}>Services</li></Link>
                <Link to="/useCase"><li onClick={() => setShow(false)}>Use Cases</li></Link>
                <Link to="/pricing"><li onClick={() => setShow(false)}>Pricing</li></Link>
                <Link to="/blog"><li onClick={() => setShow(false)}>Blog</li></Link>
            </ul>
        </NavBar>
    )
}

export default Nav

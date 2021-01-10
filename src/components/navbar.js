import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Client Management</Link>
                <ul className="right">
                    <li><NavLink to='/'>New Project</NavLink></li>
                    <li><NavLink to='/'>Log Out</NavLink></li>
                    <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
                </ul>
                <ul className="right">
                    <li><NavLink to='/'>Signup</NavLink></li>
                    <li><NavLink to='/'>Login</NavLink></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar
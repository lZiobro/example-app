import React from 'react';
import './Navbar.scss';
import {Outlet, Link} from 'react-router-dom';
import logoLong from '../../assets/shared/logo-long.png';



function Navbar() {
    return (
        <>
        <nav className='Navbar-wrapper'>
        <Link to='/' className='Navbar-logo-wrapper'>
            <img className='Navbar-logo' src={logoLong} alt='Logo' />
        </Link>
          <ul>
            <li className='navbar-btn'>
              <Link to="/">Home</Link>
            </li>
            <li className='navbar-btn'>
              <Link to="/mercenaries">Mercenaries</Link>
            </li>

            {(localStorage.getItem('token')) ?
            <>
            <li className='navbar-btn'>
              <Link to="/mail">Mailbox</Link>
            </li>
            <li className='navbar-btn'>
              <Link to={"/mercenary/"+localStorage.getItem("username")}>Profile</Link>
            </li>
            </>
            : ""}

            {(!localStorage.getItem('token')) ?
            <>
              <li className='navbar-btn'>
                <Link to="/login">Login</Link>
              </li>
              <li className='navbar-btn'>
                <Link to="/register">Register</Link>
              </li>
            </>
            :
            <li className='navbar-btn'>
                <Link to="/logout">Logout</Link>
              </li>
            }
          </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Navbar;
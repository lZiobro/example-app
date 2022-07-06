import React from 'react';
import './Navbar.scss';
import {Outlet, Link} from 'react-router-dom';
import logo from '../../assets/shared/logo.png';



function Navbar() {
    return (
        <>
        <nav className='Navbar-wrapper'>
        <Link to='/' className='Navbar-logo-wrapper'>
            <img className='Navbar-logo' src={logo} alt='Logo' />
        </Link>
          <ul>
            <li className='primary-btn'>
              <Link to="/">Home</Link>
            </li>
            <li className='primary-btn'>
              <Link to="/mercenaries">Mercenaries</Link>
            </li>

            {(localStorage.getItem('token')) ?
            <li className='primary-btn'>
              <Link to="/mail">Mailbox</Link>
            </li>
            : ""}

            {(!localStorage.getItem('token')) ?
            <>
              <li className='primary-btn'>
                <Link to="/login">Login</Link>
              </li>
              <li className='primary-btn'>
                <Link to="/register">Register</Link>
              </li>
            </>
            :
            <li className='primary-btn'>
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
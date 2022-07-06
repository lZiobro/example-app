import {React} from "react";
import './Footer.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/shared/logo.png';

function Footer() {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-content-links">
            <Link to="/">Home</Link>
            <Link to="/mercenaries">Mercenaries</Link>
            </div>
            <img className='footer-logo' src={logo} alt='Logo' />
        </div>
    </footer>
    )
}

export default Footer;
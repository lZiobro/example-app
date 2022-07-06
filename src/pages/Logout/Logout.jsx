import {React, useEffect} from "react";
import './Logout.scss';
import {useNavigate} from 'react-router-dom';

function Logout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        props.setLoggedIn(false);
        setTimeout(() => {
            navigate('/');
        }, 2500)
    }, [])

    return (
        <div className="logout-wrapper old-paper-background soft-edges">
            <h1>Succesfully logged out.</h1>
        </div>
    )
}

export default Logout;
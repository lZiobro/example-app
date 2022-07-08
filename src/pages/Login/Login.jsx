import React from 'react';
import {useEffect, useState} from 'react';
import './Login.scss';
import {useNavigate} from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const apiLoginUrl = process.env.REACT_APP_API_BASE_URL+'/api/user/login';
    const apiGetUserUrl = process.env.REACT_APP_API_BASE_URL+'/api/user';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await apiLogin({userName, password});
        localStorage.setItem('token',(await data.json()).token);
        if(localStorage.getItem('token') != null && localStorage.getItem('token') != 'undefined') {
            props.setLoggedIn(true);
            navigate(-1);
        }
    }


    const apiLogin = async (credentials) => {
        console.log(JSON.stringify(credentials));
    return fetch(apiLoginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
    }

    const handleTryAuth = async (e) => {
        e.preventDefault();
        const data = await apiTryAuth("7df2a7a0-b330-4d31-9b71-8bddce1ccba1");
        console.log(data);
    }


    const apiTryAuth = async (userId) => {
        //console.log('Authorization: Bearer' + token);
        console.log(JSON.stringify(userId));
    return fetch(apiGetUserUrl+"?userId="+userId, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
    }
    
    return(
        <>
        <div className='login-credentials-wrapper soft-edges old-paper-background'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div className='login-wrapper'>
                    <label htmlFor="userName" className='login-label'>UserName:</label>
                    <br/>
                    <input type="text" name="userName" id="userName" className='login-input' onChange={e => setUserName(e.target.value)} />
                </div>
                <div className='password-wrapper'>
                    <label htmlFor="password" className='password-label'>Password:</label>
                    <br />
                    <input type="password" name="password" id="password" className='password-input' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='submit-button-wrapper'>
                    <button type='submit' className="primary-btn">Sign In</button>
                    <p onClick={handleTryAuth}>Try Auth</p>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;
import {React, useEffect, useState} from 'react';
import './Register.scss';
import {useNavigate} from 'react-router-dom';

function Register(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [race, setRace] = useState();
    const [occupation, setOccupation] = useState();
    const [experience, setExperience] = useState();
    const apiRegisterUrl = process.env.REACT_APP_API_BASE_URL+'/api/users/register';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await apiRegister({userName, password, race, occupation, experience});
        if(result.ok) navigate('/login');
    }


    const apiRegister = async (credentials) => {
    return fetch(apiRegisterUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
     }
    
    return(
        <>
        <div className='login-credentials-wrapper soft-edges old-paper-background'>
            <form className='login-credentials login-form' onSubmit={handleSubmit}>
                <div className='login-wrapper'>
                    <label htmlFor="login" className='login-label'>UserName:</label>
                    <br />
                    <input type="text" name="login" id="login" className='login-input' onChange={e => setUserName(e.target.value)} />
                </div>
                <div className='password-wrapper'>
                    <label htmlFor="password" className='password-label'>Password:</label>
                    <br />
                    <input type="password" name="password" id="password" className='password-input' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='race-wrapper'>
                    <label htmlFor="race" className='race-label'>Race:</label>
                    <br />
                    <input type="text" name="race" id="race" className='input-input' onChange={e => setRace(e.target.value)}/>
                </div>
                <div className='occupation-wrapper'>
                    <label htmlFor="occupation" className='occupation-label'>Occupation:</label>
                    <br />
                    <input type="text" name="occupation" id="occupation" className='input-input' onChange={e => setOccupation(e.target.value)}/>
                </div>
                <div className='experience-wrapper'>
                    <label htmlFor="experience" className='experience-label'>Experience:</label>
                    <br />
                    <input type="text" name="experience" id="experience" className='input-input' onChange={e => setExperience(e.target.value)}/>
                    
                </div>
                <div className='submit-button-wrapper'>
                    <button type='submit' className="primary-btn">Register</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Register;
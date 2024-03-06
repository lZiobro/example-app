import React from "react";
import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {
  getTokenStorage,
  setTokenStorage,
  setUsernameStorage,
} from "../../Storage/UserStorage";
import { postLoginApi } from "../../service/LoginService";

function Login(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postLoginApi({ userName, password });
    const token = (await data.json())?.token;
    if (!token) return;
    setTokenStorage(token);
    if (getTokenStorage()) {
      setUsernameStorage(userName);
      props.setLoggedIn(true);
      navigate(-1);
    }
  };

  return (
    <>
      <div className="login-credentials-wrapper soft-edges old-paper-background">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-wrapper">
            <label htmlFor="userName" className="login-label">
              UserName:
            </label>
            <br />
            <input
              type="text"
              name="userName"
              id="userName"
              className="login-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="password-wrapper">
            <label htmlFor="password" className="password-label">
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-button-wrapper">
            <button type="submit" className="primary-btn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

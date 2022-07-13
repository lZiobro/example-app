import React from "react";
import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const apiLoginUrl = process.env.REACT_APP_API_BASE_URL + "/api/users/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiLogin2({ userName, password });
    const token = (await data.json())?.token;
    if (!token) return;
    localStorage.setItem("token", token);
    if (localStorage.getItem("token")) {
      localStorage.setItem("username", userName);
      props.setLoggedIn(true);
      navigate(-1);
    }
  };

  const apiLogin2 = async (credentials) => {
    return fetch(apiLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
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

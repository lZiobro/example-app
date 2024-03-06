import { React, useEffect } from "react";
import "./Logout.scss";
import { useNavigate } from "react-router-dom";
import {
  removeTokenStorage,
  removeUsernameStorage,
} from "../../Storage/UserStorage";

function Logout(props) {
  const navigate = useNavigate();
  let timeoutId = null;
  useEffect(() => {
    removeTokenStorage();
    removeUsernameStorage();
    props.setLoggedIn(false);
    timeoutId = setTimeout(() => {
      navigate("/");
    }, 2000);
    return function cleanup() {
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="logout-wrapper old-paper-background soft-edges">
      <h1>Succesfully logged out.</h1>
    </div>
  );
}

export default Logout;

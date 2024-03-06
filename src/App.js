import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mercenaries from "./pages/Mercenaries/Mercenaries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MercenaryDetails from "./pages/MercenaryDetails/MercenaryDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Logout from "./pages/Logout/Logout";
import Contact from "./pages/Contact/Contact";
import Mailbox from "./pages/Mailbox/Mailbox";
import Home from "./pages/Home/Home";
import { getTokenStorage } from "./Storage/UserStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    getTokenStorage() ? true : false
  );

  return (
    <div className="App">
      <div className="app-background" />

      <Router>
        <Routes>
          <Route path="/" element={<Navbar loggedIn={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path="example-react-app" element={<Home />} />
            <Route path="mercenaries" element={<Mercenaries />} />
            <Route path="mercenary/:id" element={<MercenaryDetails />} />
            <Route
              path="login"
              element={
                <Login loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
              }
            />
            <Route path="register" element={<Register />} />
            <Route
              path="logout"
              element={
                <Logout loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="mail" element={<Mailbox />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
        <Footer />
      </Router>

      <svg className="svg-filter">
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feTurbulence>
          <feColorMatrix
            values="0 0 0 .33 .69
                               0 0 0 .23 .38
                               0 0 0 .16 .16
                               0 0 0 0 .3"
          />
          <feBlend in="SourceGraphic" mode="color" />
        </filter>
      </svg>
    </div>
  );
}

export default App;

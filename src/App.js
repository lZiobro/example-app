import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Mercenaries from './pages/Mercenaries/Mercenaries';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MercenaryDetails from './pages/MercenaryDetails/MercenaryDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import Mailbox from './pages/Mailbox/Mailbox';
import Home from './pages/Home/Home';

//panel ogloszenia wystylizowac na kartke z tablicy ogloszen, okok?

function App() {
  return (
    <div className="App">
      {/*   old paper filter source: https://codepen.io/AgnusDei/pen/NWPbOxL
            wood filter source: https://codepen.io/finnhvman/pen/PoGyjGE edited\


            <svg xmlns="http://www.w3.org/2000/svg">
    <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".3 .005"/>
        <feColorMatrix values="0 0 0 .33 .69
                               0 0 0 .23 .38
                               0 0 0 .15 .16
                               0 0 0 0 1"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#filter)"/>
</svg>



        <feColorMatrix values="0 0 0 .33 .69
                               0 0 0 .23 .38
                               0 0 0 .16 .16
                               0 0 0 0 1"/>
      */}
      <svg className='svg-filter'>
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
          <feColorMatrix values="0 0 0 .33 .69
                               0 0 0 .23 .38
                               0 0 0 .16 .16
                               0 0 0 0 .3"/>
          <feBlend in="SourceGraphic" mode="color"/>
        </filter>
      </svg>

    <div className='app-background' />

    <Router>
    
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="mercenaries" element={<Mercenaries />} />
          <Route path="mercenary/:id" element={<MercenaryDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mail" element={<Mailbox />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
      <Footer />
    </Router>
    
    </div>
  )
}

export default App;

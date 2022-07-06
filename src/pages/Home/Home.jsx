import {React} from "react";
import './Home.scss';
import {Link} from 'react-router-dom';
import gandalf from '../../assets/images/gandalf-wants-you.jpg';
import adventure from '../../assets/images/woodland-elves.jpg';
import aragorn from '../../assets/images/smiling-aragorn.jpg';
import goldpouch from '../../assets/images/gold-pouch.jpg';
import dragon from '../../assets/images/dragon.jpg';
import logo from '../../assets/shared/logo.png';
import team from '../../assets/images/hobbit-team.jpg';
import smaug from '../../assets/images/smaug.jpg';


function Home() {
    return (
        <>
    <div className="homepage-wrapper homepage-wrapper-big old-paper-background">
    <div className="column-wrapper background-photo-text-panel fullscreen">
        <img className="background-image" src={smaug} alt="Big ass scary dragon"/>
            <div className="row-wrapper">
                <h3>Old fellas died on last adventure?</h3>
                <h3>Having trouble looking for new ones?</h3>
                <h3>No one good enough?</h3>
                <Link to='/mercenaries' className='check-listings join-us primary-btn pulsating'><b>Check our listings!</b></Link>
            </div>
        </div>
    </div>
    
    <div className="homepage-wrapper old-paper-background soft-edges">
        {/* no cool having 2 times h1 
        <h1><u>Hey You!</u></h1>*/}
        {/*<img className="big-image" src={gandalf} alt="Gandalf pointing at you"/>
        */}
        <p>&nbsp;</p>
        {/*
        <h3>    Have you ever found yourself in a situation, where you wanted to go on an adventure
                but your old fellas died in some old dwarvish ruins or got burned to ashes by dragon fire?</h3> */}
        
        <div className="row-wrapper">
            <h2>We do scouting for you!</h2>
            <img className="big-image" src={logo} alt="Scouter logo"/>
        </div>

        <p>&nbsp;</p>

        <div className="column-wrapper">
            <div className="photo-text-panel soft-edges">
                <img src={aragorn}/>
                <h3>Here, you can find all the best adventurers from the middlearth.</h3>
                <p>We have a whole variety of people from burglars through warriors to mages.</p>
            </div>

            <div className="photo-text-panel soft-edges">
                <img src={goldpouch}/>
                <h3>Perphaps you've come here to earn some gold?</h3>
                <p>You can announce yourself here.</p>
                <p>All you have to do is go to your profile, and list yourself from here.</p>
            </div>
        </div>

        <h2>We are also against all the evil, so you wont find any Sauron servants here!</h2>
        
        <div className="background-photo-text-panel soft-edges">
            <img className="background-image" src={team} alt="Scouter logo"/>
            <Link to='/register' className='join-us primary-btn'><b>JOIN US NOW!</b></Link>
        </div>
        
    </div>
        </>
    );
}

export default Home;
import {React, useState, useEffect} from "react";
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
import pelennor from '../../assets/images/pelennor-fields.jpg';


function Home() {

    let prevScroll = 0;

    const handleHomeScroll = (e) => {
        const heightWithoutNavbar = window.visualViewport.height-70;

        if(window.scrollY < heightWithoutNavbar && prevScroll < window.scrollY)
            window.scrollTo({top: heightWithoutNavbar, behavior: "smooth"});
        else if(prevScroll >= heightWithoutNavbar && window.scrollY < heightWithoutNavbar)
            window.scrollTo({top: 0, behavior: "smooth"});

        prevScroll = window.scrollY;
    }

    console.log("rerender");

    useEffect(() => {
        window.addEventListener("scroll", handleHomeScroll);
        return function cleanup() {window.removeEventListener("scroll", handleHomeScroll)};
    }, []);
    
    return (
        <>
        <div className="shadow-bottom">
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
        </div>
    
    <div className="homepage-wrapper old-paper-background soft-edges">
        {/* no cool having 2 times h1 
        <h1><u>Hey You!</u></h1>*/}
        {/*<img className="big-image" src={gandalf} alt="Gandalf pointing at you"/>
        */}
        <p>&nbsp;</p>
        
        <div className="column-wrapper home-top-content">
            <img className="big-image" src={logo} alt="Scouter logo"/>
            <div className="row-wrapper">
                <span>
                    <h2>We do scouting for you!</h2>
                    <p>Our company has a history dating back to first age.</p>
                    <p>Over the years, we've helped countless adventurers complete their goals e.g.:</p>
                    <ul>
                        <li><b>Overturning the tyranny of King Armed Ler.</b></li>
                        <li><b>Gathering forces for the Battles of the Fords of Isen.</b></li>
                        <li><b>Recovering the lonely mountain from the occupation of Smaug.</b></li>
                    </ul>
                    <p>And now... We are now offering our services online!</p>
                    <p></p>
                </span>
            </div>
        </div>
        
                {/* some separation between these two, would be great /\ \/  a line perhaps or some graphic? */}


        <div className="column-wrapper home-panels-wrapper soft-edges abc">
            <div className="photo-text-panel soft-edges">
                <img className="soft-edges" src={aragorn} alt="smiling adventurer"/>
                <h3>Here, you can find all the best adventurers from the middlearth.</h3>
                <p>We have a whole variety of people from burglars through warriors to mages.</p>
            </div>

            <div className="photo-text-panel soft-edges">
                <img className="soft-edges" src={goldpouch} alt="pouch of gold"/>
                <h3>Perphaps you've come here to earn some gold?</h3>
                <p>You can announce yourself here.</p>
                <p>All you have to do is go to your profile, and list yourself from here.</p>
            </div>
        </div>

        <h2><u>We are also against all the evil, so you wont find any Sauron servants here!</u></h2>
        
        <p>&nbsp;</p>
        
        <div className="background-photo-text-panel soft-edges">
            <img className="background-image" src={team} alt="Scouter logo"/>
            <Link to='/register' className='join-us primary-btn zoomOnHover'><b>JOIN US NOW!</b></Link>
        </div>
        
    </div>
        </>
    );
}

export default Home;
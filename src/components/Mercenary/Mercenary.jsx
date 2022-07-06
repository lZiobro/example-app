import { React, useState, useEffect, useRef } from 'react';
import './Mercenary.scss'
import {Link} from 'react-router-dom';

function Mercenary(props) {
    const [angle, setAngle] = useState(null);

    //const max = 5;
    //const min = -5;

    //ugly solution casue for some reason defined max/min doesnt work properly
    useEffect(() => {
        if(angle === null) setAngle(() => Math.floor(Math.random() * (8 - -8 + 1)) - 8);
      }, []);
    //to prevent weird reangling 
    if(angle === null) return (<></>);
    return (
        //add rest of the vendor prefixes
        <Link className="nostyle customnostyle" to={`/mercenary/${props.id}`} >
            <div style={{WebkitTransform:'rotate('+angle+'deg)', transform:'rotate('+angle+'deg)'}}  className="mercenary-wrapper">
                <div className="mercenary-image-wrapper">
                    <img src="https://fwcdn.pl/fph/32/17/343217/362827_1.1.jpg" alt="mugshot of the mercenary" />
                </div>
                <p className='mercenary-name'>{props.name}</p>
                <p className='mercenary-misc'>{props.race}, {props.occupation}</p>
            </div>
        </Link>
    )
}

export default Mercenary;
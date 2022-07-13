import { React, useState, useEffect } from "react";
import "./Mercenary.scss";
import { Link } from "react-router-dom";

function Mercenary(props) {
  const [angle, setAngle] = useState(null);
  const placeholderUrl =
    "https://thumbs.dreamstime.com/b/fantasy-character-magic-woodcutter-elderly-man-face-long-thick-beard-braided-mustache-steel-armor-old-headdress-194964340.jpg";

  useEffect(() => {
    const max = 5;
    const min = -5;
    if (angle === null)
      setAngle(() => Math.floor(Math.random() * (max - min + 1)) - max);
  }, [angle]);
  //to prevent weird reangling
  if (angle === null) return <></>;
  return (
    //add rest of the vendor prefixes
    <Link className="nostyle customnostyle" to={`/mercenary/${props.id}`}>
      <div
        style={{
          WebkitTransform: "rotate(" + angle + "deg)",
          transform: "rotate(" + angle + "deg)",
        }}
        className="mercenary-wrapper"
      >
        <div className="mercenary-image-wrapper">
          <img
            src={props.imageSrc ? props.imageSrc : placeholderUrl}
            alt="mugshot of the mercenary"
          />
        </div>
        <p className="mercenary-name">{props.name}</p>
        <p className="mercenary-misc">
          {props.race}, {props.occupation}
        </p>
      </div>
    </Link>
  );
}

export default Mercenary;

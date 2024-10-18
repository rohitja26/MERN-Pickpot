import React from "react";
import NoImage from "./assets/no-image.png";

import "./Locationsitem.css";
const LocationsItem = (props) => {
  const imageSrc = props.pic && props.pic.length > 0 ? props.pic : NoImage;

  return (
    <li className="locationitem">
      <div className="locationitem-content">
        <div className="locationitem-pic">
          <img src={`${imageSrc}`} alt={props.title} />
        </div>
        <div className="locationitem-infor">
          <h2>{props.title}</h2>
          <h3>{props.desc}</h3>
          <p>{props.address}</p>
        </div>
      </div>
    </li>
  );
};

export default LocationsItem;

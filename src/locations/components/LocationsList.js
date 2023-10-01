import React from "react";

import LocationItem from "../components/Locationsitem";
import "./LocationsList.css";

const LocationsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No locations exists</h2>
      </div>
    );
  }
  return (
    <ul className="locationslist">
      {props.items.map((location) => {
        return (
          <LocationItem
            key={location._id}
            id={location._id}
            title={location.title}
            pic={location.pic}
            address={location.address}
            desc={location.desc}
          />
        );
      })}
    </ul>
  );
};

export default LocationsList;

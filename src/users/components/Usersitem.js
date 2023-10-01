import React from "react";
import { Link } from "react-router-dom";
import "./Usersitem.css";

const UsersItem = (props) => {
  return (
    <li className="useritem">
      <div className="useritem-content">
        <Link to={`${props.id}/locations`}>
        <div className="useritem-pic">
          <img src = {props.pic} width="220px" alt={props.name}></img>
        </div>
        <div className="useritem-infor">
          <h2>{props.name}</h2>
          <h3>
            {props.locationcount} {props.locationcount === 1 ? "location" : "locations"}
          </h3>
        </div>
        </Link>
      </div>
    </li>
  );
};
export default UsersItem;

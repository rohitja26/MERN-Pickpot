import React from "react";

import UsersItem from "./Usersitem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users exists</h2>
      </div>
    );
  }
  return (
    <ul className="userlist">
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user._id}
            id={user._id}
            name={user.name}
            pic={user.pic}
            locationcount={user.locationsid.length}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;

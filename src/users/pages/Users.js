import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const [savedUsers, setSavedUsers] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setSavedUsers(responseData.message);
      } catch (err) {
        alert(err.message, () => {
          setError(null);
        });
        setError(err.message);
      }
    };
    sendRequest();
  }, []);
  
  return (
    <React.Fragment>
      {savedUsers && <UsersList items={savedUsers}/>};
    </React.Fragment>
  );
};
export default Users;

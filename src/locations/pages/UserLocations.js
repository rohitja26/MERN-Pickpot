import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LocationsList from "../components/LocationsList";
import { LoginContext } from "../../common/components/context";

const UserLocations = () => {
  const logincontext = useContext(LoginContext);

  const userid = useParams().userid;
  const [error, setError] = useState(null);
  const [savedLocations, setSavedLocations] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      if (!userid) {
        setError("User ID is not defined.");
        return;
      }
      try {
        const response = await fetch(
          `https://mern-pickpot-backend.onrender.com/api/locations/users/${userid}`
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setSavedLocations(responseData.message);
      } catch (err) {
        setError(err.message);
        alert(err.message); // Custom alert handling can be implemented here  
      }
    };

    sendRequest();
  }, [userid]);

  return (
    <React.Fragment>
      {savedLocations && <LocationsList items={savedLocations} />}
    </React.Fragment>
  );
};

export default UserLocations;

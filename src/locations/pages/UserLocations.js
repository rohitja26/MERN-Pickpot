import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LocationsList from "../components/LocationsList";

const UserLocations = () => {
  // const USER_LOCATIONS = [
  //   {
  //     id: "loc1",
  //     title: "Red Fort",
  //     desc: "The Red Fort or Lal Qila (Hindustani: [lal qila]) is a historic fort in the Old Delhi neighbourhood of Delhi, India, ",
  //     pic: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2-686x400.jpg",
  //     address: "W82F+4C, Adarsh Meena Colony, Dausa, Rajasthan 303303",
  //     userid: "u1",
  //   },
  //   {
  //     id: "loc2",
  //     title: "Taj Mahal",
  //     desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra",
  //     pic: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
  //     address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
  //     userid: "u1",
  //   },
  //   {
  //     id: "loc3",
  //     title: "Jatayu Park",
  //     desc: "Jatayu Earth Center, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India",
  //     pic: "https://akm-img-a-in.tosshub.com/indiatoday/jatayustory-647_112817060030.jpg",
  //     address:
  //       "Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
  //     userid: "u2",
  //   },
  // ];
  const userid = useParams().userid;
  const [error, setError] = useState();
  const [savedlocations, setSavedLocations] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/locations/users/${userid}`
        );
        const responseData = await response.json();
        console.log("userlocations:" + responseData.message);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setSavedLocations(responseData.message);
      } catch (err) {
        alert(err.message, () => {
          setError(null);
        });
        setError(err.message);
      }
    };
    sendRequest();
  }, [userid]);

  // const FILTERED_LOCATIONS = USER_LOCATIONS.filter(
  //   (location) => location.userid === userid
  // );
  return (
    <React.Fragment>
      {savedlocations && <LocationsList items={savedlocations} />}
    </React.Fragment>
  );
};

export default UserLocations;

import React, { useContext } from "react";
import "./NavLinks.css";
import { LoginContext } from "../context";
import { NavLink } from "react-router-dom";
const NavLinks = (props) => {
     const loggedin = useContext(LoginContext);
     return (
          <ul className="navlinks">
               <li>
                    <NavLink to="/" exact>Everyone</NavLink>
               </li>
               {loggedin.isLoggedIn && (
                    <li>
                         <NavLink to={`${loggedin.userID}/locations`}>My locations</NavLink>
                    </li>

               )}
               {loggedin.isLoggedIn && (
                    <li>
                         <NavLink to="/locations/new" >Add locations</NavLink>
                    </li>
               )}

               {!loggedin.isLoggedIn && (
                    <li>
                         <NavLink to="/login">Sign in/up</NavLink>
                    </li>
               )}
               {loggedin.isLoggedIn && (
                    <button onClick={loggedin.logout}>Log Out</button>
               )}
          </ul>
     );
};
export default NavLinks;
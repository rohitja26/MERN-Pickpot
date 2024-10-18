import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import MainNavigation from "./common/components/Nevigation/MainNevigation";
import UserLocations from "./locations/pages/UserLocations";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";
import SignUp from "./users/pages/SignUp";

const App = () => {
  const [userID, setUserID] = useState(null);
  const [isloggedin, setIsloggedin] = useState(false);
  const login = useCallback((uid) => {
    setUserID(uid);
    setIsloggedin(true);
  }, []);

  const logout = useCallback(() => {
    setIsloggedin(false);
    setUserID(null);
  }, []);

  let validroutes;

  if (isloggedin) {
    validroutes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/locations">
          <UserLocations />
        </Route>
        <Route path="/locations/new" exact>
          <NewLocation />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    validroutes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/locations" exact>
          <UserLocations />
        </Route>
        <Route path="/login" exact>
          <SignUp /> // Here only the SignUp component is added for testing
          purposes
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isloggedin,
        userID: userID,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{validroutes}</main>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;

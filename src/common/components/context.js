import { createContext } from "react";

export const LoginContext = createContext({
  userID: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

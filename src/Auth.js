import { createContext, useContext, useState } from "react";

export const authContext = createContext(null);

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

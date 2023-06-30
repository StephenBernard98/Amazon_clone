import { createContext, useContext, useState } from "react";

export const context = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = {
  name: "Guest",
  isGuest: true,
  email: "abcd@yourmail.com"
};

export function UserContext({ children }) {
  const [user, setUser] = useState(USER);

  const logIn = (username) => {
    setUser({ isGuest: false, name: username, email: "" });
  };

  const logOut = () => {
    setUser(USER);
  };

  return (
    <context.Provider value={{ user, logIn, logOut }}>
      {children}
    </context.Provider>
  );
}

export function useUserContext() {
  const { user, logIn, logOut } = useContext(context);
  return { user, logIn, logOut };
}

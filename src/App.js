import React from "react";
import Components from "./Components";
import { UserContext } from "./Auth";

const App = () => {
  return (
    <div>
      <UserContext>
        <Components />
      </UserContext>
    </div>
  );
};

export default App;

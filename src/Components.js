import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import RequireAuth from "./RequireAuth";


const Components = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
      </Routes>
    </div>
  );
};

export default Components;

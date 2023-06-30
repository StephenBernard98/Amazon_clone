import { NavLink } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const getChange = (e) => {
    setUser(e.target.value);
  };

  const submit = () => {
    auth.logIn(user);
    navigate(redirectPath, { replace: true });
  };
  console.log(user);
  return (
    <div className="body">
      <div className="login">
        <div className="login__form">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
            alt="Amazon_logo"
          />
          <form>
            <h2>Sign-in</h2>
            <label>E-mail</label>
            <input type="text" className="form__above" onChange={getChange} />

            <label>Password</label>
            <input
              type="password"
              className="form__input form__below"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <NavLink to="/">
              <input
                type="button"
                value="Login"
                onClick={submit}
                className="signIn"
                disabled={!user || !input}
              />
            </NavLink>
            <p>
              By signing-in you agree to Amazon's conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice{" "}
            </p>
            <input
              type="button"
              value="Create your Amazon Account"
              className="form__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

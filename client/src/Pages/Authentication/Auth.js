import React, { useContext, useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { loginCall } from "../../api/calls";
import { AuthContext } from "../../Context/AuthContext";

const Auth = () => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };

  return (
    <div className="auth">
      <div className="authContainer">
        <div className="bg">
          <div className="box signIn">
            <h2>Already Have an Account ?</h2>
            <button className="signInBtn" onClick={() => setActive(!active)}>
              Sign In
            </button>
          </div>
          <div className="box signUp">
            <h2>Don't Have an Account ?</h2>
            <button className="signUpBtn" onClick={() => setActive(!active)}>
              Sign Up
            </button>
          </div>
        </div>
        <div className={active ? "forms activeSide" : "forms"}>
          <div className="form signInForm">
            <form onSubmit={handleLogin}>
              <h3>Sign Up</h3>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                require
              />
              <input
                type="password"
                placeholder="Password"
                require
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Log In" />
              <Link to="/forgotpassword" className="link">
                Forgot Password
              </Link>
            </form>
          </div>
          <div className="form signUpForm">
            <p>This feature isn't Available anymore!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

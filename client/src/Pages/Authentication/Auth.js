import React, { useContext, useState } from "react";
import "./Auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute, toastOptions } from "../../api/endpoints";
import { loginCall } from "../../api/calls";
import { AuthContext } from "../../Context/AuthContext";

const Auth = () => {
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordAgain !== password) {
      return toast.error("Passwords don't match", toastOptions);
    } else {
      const user = {
        username,
        email,
        password,
      };
      console.log(user);
      try {
        const { data } = await axios.post(registerRoute, user);
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          window.location.reload();
          navigate("/login");
        }
      } catch (err) {
        toast.error(err, toastOptions);
      }
    }
  };

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
            <form onSubmit={handleRegister}>
              <h3>Sign In</h3>
              <input
                type="text"
                placeholder="Username"
                require
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                require
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;

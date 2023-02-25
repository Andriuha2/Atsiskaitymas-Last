import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import icon from "../../assets/icon.png";
import AbouthAuth from "./AbouthAuth";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
    console.log({ name, email, password });
  };

  return (
    <section className="auth-section">
      {isSignup && <AbouthAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img
            src={icon}
            alt="stack overlow"
            className="login-logo"
            width="100"
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4> Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && <p>Password must be STRONG </p>}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ color: "#666767", fontSize: "13px" }}>
                I agree all terms
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              {" "}
              By clicking Sign up you agree all{" "}
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don`t have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

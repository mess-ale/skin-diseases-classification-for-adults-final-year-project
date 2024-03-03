import React, { useState } from "react";
import { Footer } from "./Footer";
import "./Signup&Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
    console.log("f you bitch");
  };

  return (
    <>
      <div className="homesignup">
        <form className="signuppage" onSubmit={handleSubmit}>
          <h1 className="loginname">Log In</h1>
          <div className="loginform">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="loginform">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signupbutton">
            <button type="submit" disabled={!name || !password}>
              <Link to="/home/upload">Log In</Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

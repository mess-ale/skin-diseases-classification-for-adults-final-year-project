import React, { useState } from "react";
import { Footer } from "./Footer";
import './Signup&Login.css'

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
            <h1 className="creatau">Log In</h1>
            <div className="signupform">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signupform">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signupbutton">
              <button type="submit" disabled={!name || !password}>
                Log In
              </button>
            </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

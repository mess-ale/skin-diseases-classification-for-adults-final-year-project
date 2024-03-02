import React, { useState } from "react";
import { Footer } from "./Footer.js";
import './Signup&Login.css'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      console.log("email problem");
      return;
    }

    setName("");
    setPassword("");
    setRePassword("");
    setEmail("");
    console.log("sign up seccessesful");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <div className="homesignup">
        <form className="signuppage" onSubmit={handleSubmit}>
          <h1 className="creatau">Create Account</h1>
          <div className="signupform">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <sup>*</sup>
          </div>
          <div className="signupform">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <sup>*</sup>
          </div>
          <div className="validat">
            {emailError && <span>{emailError}</span>}
          </div>
          <div className="signupform">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <sup>*</sup>
          </div>
          <div className="signupform">
            <input
              type="password"
              placeholder="Repeat Your Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <sup>*</sup>
          </div>
          <div className="validat">
            {password !== rePassword && "password do not match"}
          </div>
          <div className="signupbutton">
            <button
              type="submit"
              disabled={
                !name ||
                !password ||
                !rePassword ||
                password !== rePassword ||
                !email
              }
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;

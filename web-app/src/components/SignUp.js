import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Create Account</h2>
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
            {emailError && <span>{emailError}</span>}
            <sup>*</sup>
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
            {password !== rePassword && "password not match"}
            <sup>*</sup>
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
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;

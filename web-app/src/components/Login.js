import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Log In</h2>
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
          <div className="loginbutton">
            <button type="submit" disabled={!name || !password}>
              Log In
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Footer } from "./Footer.js";
import { Stack, Typography, Input, Button } from "@mui/material";
import HomeHeader from "./HomeHeader.js";
import logsignimg from "./assets/better.jpg";
import { Link } from "react-router-dom";

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
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: '2rem'
        }}
      >
        <Stack
          sx={{
            marginTop: "8rem",
            backgroundImage: `url(${logsignimg})`,
            width: "37%",
            display: "flex",
            borderRadius: "1rem",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              variant="subtitle"
              component={"h1"}
              style={{ color: "#fff", textAlign: "center", padding: "2rem" }}
            >
              Create Account
            </Typography>
            <Stack spacing={"2rem"} sx={{ alignItems: "center" }}>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ color: "#000", backgroundColor: "#fff", width: "65%" }}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "#000", backgroundColor: "#fff", width: "65%" }}
              />

              {emailError && <span>{emailError}</span>}

              <Input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "#000", backgroundColor: "#fff", width: "65%" }}
              />
              <Input
                type="password"
                placeholder="Repeat Your Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                style={{ color: "#000", backgroundColor: "#fff", width: "65%" }}
              />
              <Typography sx={{ color: 'red'}}>
              {password !== rePassword && "password do not match"}

              </Typography>

              <Stack sx={{ paddingBottom: "5rem", }}>
                <Button
                  type="submit"
                  disabled={
                    !name ||
                    !password ||
                    !rePassword ||
                    password !== rePassword ||
                    !email
                  }
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                    padding: "0.3rem 2rem",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <Link
                    to="/home/upload"
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {!name ||
                    !password ||
                    !rePassword ||
                    password !== rePassword ||
                    !email
                      ? "enter all inputs"
                      : "Sign Up"}
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}

export default SignUp;

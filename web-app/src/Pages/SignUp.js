import React, { useState } from "react";
import { Footer } from "../components/Footer.js";
import { Stack, Typography, Input, Button } from "@mui/material";
import HomeHeader from "../components/HomeHeader.js";
import logsignimg from "../assets/better.jpg";
import LoginIcon from "@mui/icons-material/Login";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    }

    if (!name) {
      setNameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!rePassword) {
      setRePasswordError(true);
    }

    if (
      !name ||
      !password ||
      !rePassword ||
      password !== rePassword ||
      !email
    ) {
      // history.push("/home/upload");
    }

    setName("");
    setPassword("");
    setRePassword("");
    setEmail("");
    console.log("sign up seccessesful");
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
          marginBottom: "2rem",
        }}
      >
        <Stack
          sx={{
            marginTop: "8rem",
            backgroundImage: `url(${logsignimg})`,
            width: "30%",
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
                required
                error={nameError}
                onChange={(e) => setName(e.target.value)}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: "1rem",
                  backgroundColor: "#fff",
                  width: "65%",
                }}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                error={emailError}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: "1rem",
                  backgroundColor: "#fff",
                  width: "65%",
                }}
              />

              <Input
                type="password"
                required
                error={passwordError}
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  backgroundColor: "#fff",
                  width: "65%",
                  paddingLeft: "1rem",
                }}
              />
              <Input
                type="password"
                required
                error={rePasswordError}
                placeholder="Repeat Your Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  backgroundColor: "#fff",
                  width: "65%",
                  paddingLeft: "1rem",
                }}
              />
              <Typography sx={{ color: "red" }}>
                {password !== rePassword && "password do not match"}
              </Typography>

              <Stack sx={{ paddingBottom: "5rem" }}>
                <Button
                  type="submit"
                  endIcon={<LoginIcon />}
                  sx={{
                    backgroundColor: "#00B9FE",
                    color: "#333",
                    padding: "0.3rem 2rem",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Sign Up
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

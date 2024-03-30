import React, { useState } from "react";
import { Footer } from "../components/Footer.js";
import { Stack, Typography, Input, Button, Container } from "@mui/material";
import HomeHeader from "../components/HomeHeader.js";
import logsignimg from "../assets/better.jpg";
import LoginIcon from "@mui/icons-material/Login";
import HamburgerHome from "../components/HamburgerHome.js";

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

  const sxinput = {
    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.1rem",
    },
  };

  const styleinput = {
    color: "#000",
    borderRadius: "0.25rem",
    paddingLeft: "1rem",
    backgroundColor: "#fff",
    width: "65%",
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          marginBottom: { sm: "0rem", md: "7rem" },
        }}
      >
        <Stack
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
          }}
        >
          <HamburgerHome />
        </Stack>
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          <HomeHeader />
        </Stack>
      </Stack>

      <Container>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: "4rem", sm: "3rem", md: "1rem", lg: "2rem" }}
        >
          <Stack
            sx={{
              width: { xs: "100%" },
            }}
          >
            <Stack>
              <Typography
                sx={{
                  padding: {
                    xs: "0rem 0rem 1.5rem 0rem",
                    sm: "1rem 0rem 1.5rem 0rem",
                    md: "5rem 0rem 1.5rem 0rem",
                    lg: "6rem 0rem 1.5rem 0rem",
                  },
                  color: "#7FD1AE",
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: {
                    xs: "2rem",
                    sm: "2.25rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textTransform: "uppercase",
                }}
              >
                DermAI
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1.15rem",
                    md: "1.3rem",
                    lg: "1.55rem",
                  },
                }}
              >
                <span
                  style={{
                    color: "#00C6CF",
                    fontWeight: "bold",
                  }}
                >
                  DermAI
                </span>{" "}
                uses powerful AI to analyze your skin and help you make informed
                decisions about your health journey
              </Typography>
            </Stack>
          </Stack>

          <Stack
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                backgroundImage: `url(${logsignimg})`,
                borderRadius: "1rem",
                width: { xs: "20rem", sm: "26rem" },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Typography
                  sx={{
                    textAlign: "center",
                    padding: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                    },
                    color: "#00C6CF",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Create Account
                </Typography>
                <Stack
                  spacing={{
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2rem",
                  }}
                  sx={{ alignItems: "center" }}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    error={nameError}
                    onChange={(e) => setName(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    required
                    error={emailError}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />

                  <Input
                    type="password"
                    required
                    error={passwordError}
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Input
                    type="password"
                    required
                    error={rePasswordError}
                    placeholder="Repeat Your Password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Typography sx={{ color: "red" }}>
                    {password !== rePassword && "password do not match"}
                  </Typography>

                  <Stack>
                    <Button
                      type="submit"
                      endIcon={<LoginIcon />}
                      sx={{
                        color: "#333",
                        padding: "0.3rem 2rem",
                        marginBottom: "4rem",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #7FD1AE, #00C6CF)",

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
        </Stack>
      </Container>

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

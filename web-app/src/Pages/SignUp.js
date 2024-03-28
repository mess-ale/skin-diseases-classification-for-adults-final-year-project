import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer.js";
import { Stack, Typography, Input, Button } from "@mui/material";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={
          screenWidth > 700
            ? { marginBottom: "8rem" }
            : { marginBottom: "0rem" }
        }
      >
        {screenWidth > 700 ? <HomeHeader /> : <HamburgerHome />}
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
            backgroundImage: `url(${logsignimg})`,
            width: { xs: "70%", sm: "58%", md: "40%", lg: "30%" },
            display: "flex",
            borderRadius: "1rem",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              sx={{
                color: "#fff",
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
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.1rem",
                  },
                }}
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
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.1rem",
                  },
                }}
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
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.1rem",
                  },
                }}
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
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.1rem",
                  },
                }}
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

              <Stack>
                <Button
                  type="submit"
                  endIcon={<LoginIcon />}
                  sx={{
                    backgroundColor: "#00B9FE",
                    color: "#333",
                    padding: "0.3rem 2rem",
                    marginBottom: "4rem",
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

import React, { useState } from "react";
import { Stack, Typography, Input, Button, Container } from "@mui/material";
import logsignimg from "../assets/better.jpg";
import LoginIcon from "@mui/icons-material/Login";
import axios from "../api.js";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alreadyTaken, setAlreadyTaken] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme()

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/user/register/", {
        username: name,
        password: password,
        email: email,
      });
      navigate("/login");
    } catch (error) {
      // Assuming the server returns a field-specific error message
      if (error.response.data.username) {
        setAlreadyTaken(true);
      } else {
        alert(error);
      }
    } finally {
      setLoading(false);
    }
  };

  console.log(loading);

  const sxinput = {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "0.9rem",
      lg: "1rem",
    },
    fontFamily: "Outfit",
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
        display: "flex",
        flexDirection: "column",
        paddingTop: {xs: '4rem',sm: "10rem"},
      }}
    >
     
      <Container maxWidth={"md"}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
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
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: {
                    xs: "2rem",
                    sm: "2.25rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textTransform: "uppercase",
                  fontFamily: "Young Serif",
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
                  fontFamily: "Outfit",
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
                width: {xs: '65%', sm: '100%'}
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
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Young Serif",
                  }}
                >
                  Create Account
                </Typography>
                <Stack
                  spacing={{
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                  }}
                  sx={{ alignItems: "center" }}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Input
                    type="password"
                    required
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Input
                    type="password"
                    required
                    placeholder="Repeat Your Password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    sx={sxinput}
                    style={styleinput}
                  />
                  <Typography sx={{ color: "red" }}>
                    {password !== rePassword && "password do not match"}
                  </Typography>
                </Stack>
                  {alreadyTaken && (
                    <Typography
                      sx={{
                        color: "red",
                        textAlign: "center",
                        paddingTop: "1rem",
                      }}
                    >
                      Username is already taken.
                    </Typography>
                  )}
                <Stack sx={{ alignItems: "center", paddingTop: "1.5rem" }}>
                  <Button
                    type="submit"
                    endIcon={<LoginIcon />}
                    sx={{
                      width: "65%",
                      color: "#333",
                      padding: "0.3rem 2rem",
                      marginBottom: "4rem",
                      background: theme.palette.primary.main,
                      borderRadius: "5px",
                      "&:hover":{
                        background: theme.palette.primary.main
                      },
                    }}
                    justifyContent="center"
                    disabled={password !== rePassword}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default SignUp;

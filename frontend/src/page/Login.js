import React, { useState } from "react";
import { Button, Container, Input, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import logsignimg from "../assets/better.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import { useTheme } from "@emotion/react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorUserPass, setErrorUserPass] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme()

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("http://127.0.0.1:8000/api/token/", {
        username: name,
        password: password,
      });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      setErrorUserPass(true);
    } finally {
      setLoading(false);
    }
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
          spacing={{ xs: "4rem", sm: "4rem", md: "1rem", lg: "2rem" }}
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
                    md: "5rem 0rem 1.75rem 0rem",
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
                    xs: "1.1rem",
                    sm: "1.15rem",
                    md: "1.3rem",
                    lg: "1.55rem",
                  },
                  fontFamily: "Outfit",
                }}
              >
                Welcome back! Please sign in to access your DermAI account
                <Typography
                  sx={{
                    textAlign: "justify",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1rem",
                      md: "1.31rem",
                      lg: "1.55rem",
                    },
                    fontFamily: "Outfit",
                  }}
                >
                  Don't have an account?
                  <Link to={"/join"}>
                    <Button color="background">Register</Button>
                  </Link>
                </Typography>
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
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    padding: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontFamily: "Young Serif",
                  }}
                >
                  Log In
                </Typography>
                <Stack
                  spacing={{
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                  }}
                  sx={{ alignItems: "center" }}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: "Outfit",
                    }}
                    style={{
                      color: "#000",
                      borderRadius: "0.25rem",
                      paddingLeft: "1rem",
                      backgroundColor: "#fff",
                      width: "65%",
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="password"
                    required
                    placeholder="Your Password"
                    value={password}
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: "Outfit",
                    }}
                    style={{
                      color: "#000",
                      borderRadius: "0.25rem",
                      backgroundColor: "#fff",
                      paddingLeft: "1rem",
                      width: "65%",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                {errorUserPass && (
                  <Typography
                    sx={{
                      color: "red",
                      textAlign: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    Invalid username or password
                  </Typography>
                )}
                <Stack
                  sx={{
                    paddingBottom: { xs: "4rem", sm: "4.5rem", md: "5rem" },
                    paddingTop: { xs: "2.75rem", sm: "3rem", md: "3.5rem" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    endIcon={<LoginIcon />}
                    sx={{
                      borderRadius: "5px",
                      background: theme.palette.primary.main,
                      width: "65%",
                      color: "#333",
                      padding: {
                        xs: "0.2rem 1.5rem",
                        sm: "0.2rem 1.75rem",
                        md: "0.3rem 2rem",
                      },
                      "&:hover":{
                        background: theme.palette.primary.main
                      },
                      fontFamily: "Young Serif",
                    }}
                  >
                    Log In
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

export default Login;

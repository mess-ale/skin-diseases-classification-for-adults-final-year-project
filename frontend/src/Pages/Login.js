import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Button, Container, Input, Stack, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import LoginIcon from "@mui/icons-material/Login";
import logsignimg from "../assets/better.jpg";
import HamburgerHome from "../components/HamburgerHome";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    if (name === "") {
      setNameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (!name && !password) {
      // history.push("/home/upload");
    }

    e.preventDefault();
    setName("");
    setPassword("");
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
              xs: 'flex',
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
              xs: 'none',
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
                  color: "#7FD1AE",
                  fontWeight: "bold",
                  textAlign: {xs: 'center', md: 'left'},
                  fontSize: {
                    xs: "2rem",
                    sm: "2.25rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textTransform: "uppercase",
                  fontFamily: 'Young Serif'
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
                  fontFamily: 'Outfit'
                }}
              >
                <span
                  style={{
                    color: "#00C6CF",
                    fontWeight: "bold",
                  }}
                >
                  Welcome back!
                </span>{" "}
                Please sign in to access your DermAI account and unlock the
                power of advanced skin analysis.
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
                width: { xs: "20rem", sm: "25rem",},
              }}
            >
              <form onSubmit={handleSubmit}>
                <Typography
                  sx={{
                    color: "#00C6CF",
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
                    fontFamily: 'Young Serif'
                  }}
                >
                  Log In
                </Typography>
                <Stack
                  spacing={{
                    xs: "1.7rem",
                    sm: "2.5rem",
                    md: "2.75rem",
                    lg: "3rem",
                  }}
                  sx={{ alignItems: "center" }}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    error={nameError}
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: 'Outfit'
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
                    error={passwordError}
                    value={password}
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: 'Outfit'
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
                  <Stack
                    sx={{
                      paddingBottom: { xs: "4rem", sm: "4.5rem", md: "5rem" },
                      paddingTop: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    }}
                  >
                    <Button
                      type="submit"
                      endIcon={<LoginIcon />}
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right, #00C6CF, #7FD1AE)",
                        borderRadius: "5px",
                        color: "#333",
                        padding: {
                          xs: "0.2rem 1.5rem",
                          sm: "0.2rem 1.75rem",
                          md: "0.3rem 2rem",
                        },
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                        },
                        fontFamily: 'Young Serif'
                      }}
                    >
                      Log In
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

export default Login;

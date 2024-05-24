import React, { useState } from "react";
import { Button, Grid, Input, Stack, Typography, useMediaQuery } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import logsignimg from "../assets/machine.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import { useTheme } from "@emotion/react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUserPass, setErrorUserPass] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e) => {
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
    }
  };

  return (
    <Grid container 
    sx={{
      ...(isSmallScreen && { // Conditionally apply styles only on small screens
        backgroundImage: `url(${logsignimg})`,
        color: 'transparent', // Ensure background image is visible
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }),
    }}>
      <Grid item xs={12} sm={6} md={5}>
        <Stack spacing={4} sx={{ padding: {xs: '7rem 3rem 0 3rem', sm: '8rem 1rem 0 1rem', md: '8rem 2rem 0 2rem', lg: "6rem"} }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Typography
                sx={{
                  color: {xs: theme.palette.primary.main, sm: theme.palette.text.main},
                  textAlign: "center",
                  fontSize: {
                    xs: "1.75rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                  },
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontFamily: "Young Serif",
                }}
              >
                Log In
              </Typography>
              <Input
                type="text"
                placeholder="Your User Name..."
                value={name}
                required
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1rem",
                  },
                  fontFamily: "Outfit",
                  fontWeight: 'bold'
                }}
                style={{
                  borderBottom: `1px solid ${theme.palette.text.main}`,
                  color: theme.palette.text.main,
                  paddingLeft: "1rem",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                variant="soft"
                required
                placeholder="Your Password..."
                value={password}
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1rem",
                  },
                  fontFamily: "Outfit",
                  fontWeight: 'bold'
                }}
                style={{
                  borderBottom: `1px solid ${theme.palette.text.main}`,
                  color: theme.palette.text.main,
                  paddingLeft: "1rem",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorUserPass && (
                <Typography
                  sx={{
                    color: "red",
                    textAlign: "center",
                    fontWeight: 'bold'
                  }}
                >
                  Invalid username or password
                </Typography>
              )}
              <Button
                type="submit"
                endIcon={<LoginIcon />}
                sx={{
                  background: theme.palette.text.main,
                  color: theme.palette.primary.main,
                  padding: {
                    xs: "0.2rem 1.5rem",
                    sm: "0.2rem 1.75rem",
                    md: "0.3rem 2rem",
                  },
                  "&:hover": {
                    background: theme.palette.text.main,
                    color: theme.palette.text.default,
                  },
                  fontFamily: "Young Serif",
                }}
              >
                Log In
              </Button>
            </Stack>
          </form>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.31rem",
                sm: "1rem",
                md: "1.31rem",
              },
              color: theme.palette.text.main,
              fontFamily: "Outfit",
            }}
          >
            Don't have an account?
            <Link to={"/join"}>
              <Button color="text">Register</Button>
            </Link>
          </Typography>
        </Stack>
      </Grid>

      <Grid
        item
        display={{xs: 'none', sm: 'block'}}
        sm={6}
        md={7}
        sx={{
          backgroundImage: `url(${logsignimg})`,
          color: "transparent",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }}
      ></Grid>
    </Grid>
  );
}

export default Login;

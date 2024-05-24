import React, { useState } from "react";
import { Stack, Typography, Input, Button, Grid, useMediaQuery } from "@mui/material";
import logsignimg from "../assets/machine.jpg";
import LoginIcon from "@mui/icons-material/Login";
import axios from "../api.js";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [alreadyTaken, setAlreadyTaken] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e) => {
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
    }
  };

  const sxinput = {
    fontSize: {
      xs: "1rem",
      sm: "0.8rem",
      md: "0.9rem",
      lg: "1rem",
    },
    fontFamily: "Outfit",
    fontWeight: 'bold'
  };

  const styleinput = {
    color: theme.palette.text.main,
    borderBottom: `1px solid ${theme.palette.text.main}`,
    paddingLeft: "1rem",
  };

  return (
    <Grid
      container
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
      }}
    >
      <Grid item xs={12} sm={6} md={5}>
        <Stack
          spacing={4}
          sx={{
            padding: {
              xs: "7rem 3rem 0 3rem",
              sm: "8rem 1rem 0 1rem",
              md: "8rem 2rem 0 2rem",
              lg: "6rem",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                  },
                  color: {xs: theme.palette.primary.main, sm: theme.palette.text.main},
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "Young Serif",
                }}
              >
                Create Account
              </Typography>
              <Input
                type="text"
                placeholder="Your User Name..."
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
              <Typography sx={{ color: "red", textAlign: 'center', fontWeight: 'bold' }}>
                {password !== rePassword && "password do not match"}
              </Typography>
              {alreadyTaken && (
                <Typography
                  sx={{
                    color: "red",
                    textAlign: "center",
                    fontWeight: 'bold'
                  }}
                >
                  Username is already taken.
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
                justifyContent="center"
                disabled={password !== rePassword}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Grid>

      <Grid
        item
        display={{ xs: "none", sm: "block" }}
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

export default SignUp;

import { useTheme } from "@emotion/react";
import { Menu, Close } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  Slide,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ACCESS_TOKEN, TOKEN_EXPIRATION } from "../constants";
import DrawerUsers from "./DrawerUsers";

function isLoggedIn() {
  const token = localStorage.getItem(ACCESS_TOKEN);

  // Check if token exists
  if (token === null) {
    return false;
  }

  // Check if token is expired
  const expirationTime = localStorage.getItem(TOKEN_EXPIRATION);
  if (expirationTime !== null && Date.now() > parseInt(expirationTime)) {
    // Token has expired, remove it from localStorage
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_EXPIRATION);
    return false;
  }

  return true;
}

console.log(localStorage.getItem(TOKEN_EXPIRATION));

function Header() {
  const theme = useTheme();
  const [openClose, setOpenClose] = useState(false);
  const handlOpenClose = () => setOpenClose(!openClose);
  const handlOpenClose2 = () => setOpenClose(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Links = () => {
    return (
      <>
        <ScrollLink to="section1" smooth={true} duration={1000} offset={-100}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            About
          </Button>
        </ScrollLink>
        <ScrollLink to="section2" smooth={true} duration={1000} offset={-100}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            Our Services
          </Button>
        </ScrollLink>
        <ScrollLink to="section3" smooth={true} duration={1000} offset={-100}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            Our Team
          </Button>
        </ScrollLink>
        <ScrollLink to="section4" smooth={true} duration={1000} offset={-100}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            Reviews
          </Button>
        </ScrollLink>
        <ScrollLink to="section5" smooth={true} duration={1000} offset={-100}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            Contact
          </Button>
        </ScrollLink>
        <Link to={"/home/SkinCareAdvice"}>
          <Button className="buttonStyle" onClick={handlOpenClose2}>
            Skin Care
          </Button>
        </Link>
      </>
    );
  };

  useEffect(() => {
    if (!isLargeScreen) {
      setOpenClose(false);
    }
  }, [isLargeScreen]);

  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        "& .fontStyle": {
          color: theme.palette.text.main,
          fontSize: theme.typography.h6.fontSize,
          textDecoration: "none",
        },
        "& .buttonStyle": {
          fontSize: {
            xs: theme.typography.h1.fontSize,
            md: theme.typography.h6.fontSize,
          },
          color: theme.palette.text.main,
          textTransform: "capitalize",
        },
      }}
      spacing={1}
    >
      <Stack
        direction={"row"}
        sx={{
          height: { xs: "3.5rem", md: "5rem" },
          padding: { xs: "0 2rem 0 2rem", md: "0 3rem 0 3rem" },
          justifyContent: "space-between",
          alignItems: "center",
          background: theme.palette.primary.main,
        }}
      >
        <Stack sx={{ fontWeight: "bold" }}>
          <Link to={"/"} className="fontStyle">
            DermAI
          </Link>
        </Stack>

        <Stack
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton onClick={handlOpenClose}>
            <Menu />
          </IconButton>
        </Stack>
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction={"row"} spacing={4}>
            <Links />
          </Stack>
        </Stack>

        {!isLoggedIn() ? (
          <Link to={"/login"}>
            <Button
              className="fontStyle"
              sx={{
                border: `solid 1px ${theme.palette.text.main}`,
                padding: "0.2rem 1rem 0.2rem 1rem",
                borderRadius: "1.5rem",
                "&:hover": {
                  color: theme.palette.primary.main,
                  background: "#000",
                },
              }}
            >
              log in / Join
            </Button>
          </Link>
        ) : (
          <DrawerUsers />
        )}
      </Stack>
      <Slide
        in={openClose}
        direction="left"
        mountOnEnter
        unmountOnExit
        timeout={800}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          background: theme.palette.primary.main,
          border: `solid 2px ${theme.palette.secondary.main}`,
        }}
      >
        <Grid container padding={"0 2rem"}>
          <Grid item xs={3}>
            <svg width={"100%"} height={"100%"} viewBox="0 0 400 200">
              <path
                d="M 0 100 C 100 50, 200 150, 400 100"
                stroke={theme.palette.text.main}
                fill="transparent"
                stroke-width="3"
              />
            </svg>
          </Grid>
          <Grid item xs={6}>
            <Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={handlOpenClose}>
                  <Close />
                </IconButton>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Links />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <path
                d="M 0 100 C 100 50, 200 150, 400 100"
                stroke={theme.palette.text.main}
                fill="transparent"
                stroke-width="3"
              />
            </svg>
          </Grid>
        </Grid>
      </Slide>
    </Stack>
  );
}

export default Header;

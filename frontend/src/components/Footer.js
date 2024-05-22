import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/machine-learning.png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Link as ScrollLink } from "react-scroll";

export const Footer = () => {
  const theme = useTheme();

  const footerstyle = {
    background: theme.palette.background.main,
    color: theme.palette.primary.main,
    padding: {
      xs: "2rem 1rem 1rem 1.5rem",
      sm: "4rem 2rem 2.25rem 2rem",
      md: "6rem 2.5rem 2.5rem 2.5rem",
      lg: "8rem 3rem 3rem 3rem",
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      paddingBottom: "0.38rem",
      "&:hover": {
        color: "#ff4800",
      },
    },
    borderRadius: "40px 40px 0 0",
    height: "100%",
    zIndex: 3,
  };

  return (
    <Stack sx={footerstyle}>
      <Stack
        direction={"row"}
        sx={{
          paddingBottom: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Stack
              alignItems={"center"}
              direction={"row"}
              spacing={"1rem"}
              sx={{ marginBottom: "1.25rem" }}
            >
              <LocationOn />
              <Typography>Addis Ababa, Ethiopia</Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              direction={"row"}
              spacing={"1rem"}
              sx={{ marginBottom: "1.25rem" }}
            >
              <Phone />
              <Typography>+251-91-755-0560</Typography>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} spacing={"1rem"}>
              <Email />
              <Typography>skindisease@gmail.com</Typography>
            </Stack>
            <Stack direction={"row"} paddingTop={"2rem"}>
              <IconButton>
                <Facebook sx={{ color: theme.palette.text.default }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: theme.palette.text.default }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: theme.palette.text.default }} />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack>
              <Typography sx={{ fontWeight: "bold", paddingBottom: "1rem" }}>
                COMPANY
              </Typography>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Link>About</Link>
              </ScrollLink>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Link>Our Services</Link>
              </ScrollLink>
              <ScrollLink
                to="section3"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Link>Our Team</Link>
              </ScrollLink>
              <ScrollLink
                to="section4"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Link>Reviews</Link>
              </ScrollLink>
              <ScrollLink
                to="section5"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Link>Contact</Link>
              </ScrollLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
              <Stack direction="row" alignItems={"center"}>
                <img
                  src={logo}
                  style={{
                    color: theme.palette.primary.main,
                    width: "40%",
                    height: "100%",
                  }}
                  alt="world view"
                />
                <Box>
                  <Typography
                    color={"primary"}
                    sx={{
                      fontSize: {
                        xs: "4rem",
                        sm: "6rem",
                        md: "4.5rem",
                        lg: "6.5rem",
                      },
                    }}
                  >
                    DermAI
                  </Typography>
                </Box>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </Stack>

      <Stack sx={{ paddingBottom: "3rem" }}>
        <Divider
          sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }}
        />
      </Stack>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Link to="/home/Privacy">
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "15px", lg: "16px" },
              }}
            >
              Privacy Policy
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "15px", lg: "16px" },
              textAlign: 'end'
            }}
          >
            © 2024 by Meseret. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;

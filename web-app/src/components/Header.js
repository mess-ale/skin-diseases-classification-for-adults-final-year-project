import { Box, Stack } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerUsers from "./DrawerUsers";

function Header() {
  const loacation = useLocation();

  const linkStyle = {
    fontSize: { sm: "0.9rem", md: "0.95rem", lg: "1rem" },
    paddingTop: '0.7rem',
  };

  const linkStyle2 = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#E0E0E0",
    marginRight: { sm: "0.3rem", md: "0.4rem", lg: "0.5rem" },
  };

  const linkStyle3 = {
    padding: "0.2rem 1rem 0.2rem 1rem",
    "&:hover": {
      backgroundColor: "#E0E0E0",
      color: "#7FD1AE",
      borderRadius: {
        sm: "0.4rem",
        md: "0.4.5rem",
        lg: "0.5rem",
      },
    },
    fontFamily: "Young Serif",
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)",
        padding: { xs: "1rem 0rem", sm: "1.25rem 0rem", md: "0.8rem 0rem" },
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "888",
      }}
    >
      <Stack
        direction={"row"}
        spacing={'2rem'}
        paddingLeft={{ sm: "1rem", md: "2.5rem", lg: "3rem" }}
      >
        <Stack>
          <DrawerUsers />
        </Stack>
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/">
            <Box
              style={
                loacation.pathname === "/"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
              sx={linkStyle3}
            >
              Home
            </Box>
          </Link>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        spacing={{ sm: "2rem", md: "2.5rem", lg: "3rem" }}
        sx={{ paddingRight: { sm: "2rem", md: "3.5rem", lg: "5rem" } }}
      >
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/upload">
            <Box
              style={
                loacation.pathname === "/home/upload"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
              sx={linkStyle3}
            >
              Upload
            </Box>
          </Link>
        </Stack>
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/preview">
            <Box
              style={
                loacation.pathname === "/home/preview"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
              sx={linkStyle3}
            >
              Preview
            </Box>
          </Link>
        </Stack>
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/prediction">
            <Box
              style={
                loacation.pathname === "/home/prediction"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
              sx={linkStyle3}
            >
              Prediction
            </Box>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;

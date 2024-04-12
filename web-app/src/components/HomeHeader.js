import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";


function HomeHeader() {
  const loacation = useLocation();

  const linkStyle = {
    color: "#E0E0E0",
    textDecoration: "none",
    fontSize: { sm: "1rem", md: "2rem" },
    fontWeight: "bold",
    marginRight: "1rem",
  };

  const linkStyle2 = {
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
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "310",
        padding: { xs: "1rem 0rem", sm: "1.25rem 0rem", md: "1.5rem 0rem" },
      }}
    >
      <Stack>
        <Stack sx={{ paddingLeft: { sm: "2rem", md: "3.3rem", lg: "4rem" } }}>
          <Link style={linkStyle} to="/">
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
              sx={linkStyle2}
            >
              Home
            </Box>
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={{ sm: "2rem", md: "2.5rem", lg: "3rem" }}
        sx={{ paddingRight: { sm: "2rem", md: "3.3rem", lg: "4rem" } }}
      >
        <Stack>
          <Link style={linkStyle} to="/login">
            <Box
              sx={linkStyle2}
              style={
                loacation.pathname === "/login"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
            >
              Log In
            </Box>
          </Link>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{
            borderRight: "1px solid #ccc", // Adjust border styles for vertical divider
            height: "100%", // Set height to match container if needed
          }}
        />
        <Stack>
          <Link style={linkStyle} to="/join">
            <Box
              sx={linkStyle2}
              style={
                loacation.pathname === "/join"
                  ? {
                      backgroundColor: "#E0E0E0",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }
                  : {}
              }
            >
              Join
            </Box>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomeHeader;

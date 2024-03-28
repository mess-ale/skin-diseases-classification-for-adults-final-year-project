import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: { sm: "1rem", md: "2rem" },
    fontWeight: "bold",
    marginRight: "1rem",
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#04003F",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "310",
        padding: { xs: "1.7rem 0rem", sm: "1.9rem 0rem", md: "2.3rem 0rem" },
      }}
    >
      <Stack sx={{ paddingLeft: { sm: "2rem", md: "3.3rem", lg: "4rem" } }}>
        <Link style={linkStyle} to="/">
          <Box
            sx={{
              padding: "0.2rem 1rem 0.2rem 1rem",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: {
                  sm: "0.4rem",
                  md: "0.4.5rem",
                  lg: "0.5rem",
                },
              },
            }}
          >
            Home
          </Box>
        </Link>
      </Stack>

      <Stack
        direction={"row"}
        spacing={{ sm: "2rem", md: "2.5rem", lg: "3rem" }}
        sx={{ paddingRight: { sm: "2rem", md: "3.3rem", lg: "4rem" } }}
      >
        <Stack>
          <Link style={linkStyle} to="/login">
            <Box
              sx={{
                padding: "0.2rem 1rem 0.2rem 1rem",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: {
                    sm: "0.4rem",
                    md: "0.4.5rem",
                    lg: "0.5rem",
                  },
                },
              }}
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
              sx={{
                padding: "0.2rem 1rem 0.2rem 1rem",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: {
                    sm: "0.4rem",
                    md: "0.4.5rem",
                    lg: "0.5rem",
                  },
                },
              }}
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

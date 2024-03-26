import { Divider, Stack } from "@mui/material";
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
      <Stack sx={{ paddingLeft: { sm: "2.5rem", md: "3.8rem", lg: "5rem" } }}>
        <Link style={linkStyle} to="/">
          Home
        </Link>
      </Stack>

      <Stack
        direction={"row"}
        spacing={{ sm: "2rem", md: "2.5rem", lg: "3rem" }}
        sx={{ paddingRight: { sm: "2.5rem", md: "3.8rem", lg: "5rem" } }}
      >
        <Stack>
          <Link style={linkStyle} to="/login">
            Log In
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
            Join
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomeHeader;

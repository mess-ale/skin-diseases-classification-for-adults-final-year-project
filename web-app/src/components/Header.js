import { Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    fontSize: { sm: "0.9rem", md: "0.95rem", lg: "1rem" },
  };

  const linkStyle2 = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
    marginRight: { sm: "0.3rem", md: "0.4rem", lg: "0.5rem" },
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#04003F",
        padding: { sm: "1.7rem 0rem", md: "2rem 0rem", lg: "2.3rem 0rem" },
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "888",
      }}
    >
      <Stack
        paddingLeft={{ sm: "2rem", md: "3.5rem", lg: "5rem" }}
        sx={linkStyle}
      >
        <Link style={linkStyle2} to="/">
          Home
        </Link>
      </Stack>

      <Stack
        direction={"row"}
        spacing={{ sm: "2rem", md: "2.5rem", lg: "3rem" }}
        sx={{ paddingRight: { sm: "2rem", md: "3.5rem", lg: "5rem" } }}
      >
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/upload">
            Upload
          </Link>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{
            borderRight: "1px solid #ccc", // Adjust border styles for vertical divider
            height: "100%", // Set height to match container if needed
          }}
        />
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/preview">
            Preview
          </Link>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{
            borderRight: "1px solid #ccc", // Adjust border styles for vertical divider
            height: "100%", // Set height to match container if needed
          }}
        />
        <Stack sx={linkStyle}>
          <Link style={linkStyle2} to="/home/prediction">
            Prediction
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;

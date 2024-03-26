import { Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: {sm: '0.7rem' , md: "12rem"},
    fontWeight: "bold",
    marginRight: "1rem",
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#04003F",
        padding: "2.3rem 0rem",
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '888'
      }}
    >
      <Stack sx={{ paddingLeft: {sm:'2rem', md: '5rem'}}}>
        <Link style={linkStyle} to="/">
          Home
        </Link>
      </Stack>

      <Stack direction={"row"} spacing={"3rem"} sx={{ paddingRight: '5rem'}}>
        <Stack>
          <Link style={linkStyle} to="/home/upload">
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
        <Stack>
          <Link style={linkStyle} to="/home/preview">
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
        <Stack>
          <Link style={linkStyle} to="/home/prediction">
            Prediction
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;

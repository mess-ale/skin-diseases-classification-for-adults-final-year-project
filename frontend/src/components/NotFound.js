import { Container, Typography } from "@mui/material";
import React from "react";

function NotFound() {

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: '#E8EAED'
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: '#00C6CF',
          marginBottom: '1rem',
        }}
      >
        404 Not Found
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: '#7FD1AE',
        }}
      >
        The page you're looking for doesn't exist!
      </Typography>
    </Container>
  );
}

export default NotFound;

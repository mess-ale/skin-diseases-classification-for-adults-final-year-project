import { Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="subtitle"
        sx={{
          color: "#fff",
          textAlign: "center",
          padding: { xs: "1rem 0rem", sm: "1.25rem 0rem", md: "1.5rem 0rem" },
          fontFamily: "Young Serif",
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.25rem" },
        }}
      >
        © 2024 Meseret. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;

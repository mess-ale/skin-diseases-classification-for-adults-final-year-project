import { Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#04003F",
      }}
    >
      <Typography
        variant="subtitle"
        sx={{
          color: "#fff",
          textAlign: "center",
          padding: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem", lg: "1.5rem" },
        }}
      >
        © 2024 Meseret. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;

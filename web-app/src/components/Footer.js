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
        component="h2"
        sx={{ color: "#fff", textAlign: "center", padding: "2rem" }}
      >
        © 2024 Meseret. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;

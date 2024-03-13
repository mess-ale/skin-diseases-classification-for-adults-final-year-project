import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#04003F",
        padding: "2rem",
      }}
    >
      <Typography
        variant="subtitle"
        component="h2"
        style={{ color: "#fff", textAlign: "center" }}
      >
        © 2024 Meseret. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

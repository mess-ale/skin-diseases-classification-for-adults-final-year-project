import { Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Stack
      sx={{ backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)", marginTop: '2rem' }}
    >
      <Typography
        variant="subtitle"
        sx={{
          color: "#fff",
          textAlign: "center",
          padding: {
            xs: "1.25rem 0rem",
            sm: "1.5rem 0rem",
            md: "1.75rem 0rem",
          },
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem", lg: "1.5rem" },
        }}
      >
        © 2024 Meseret. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;

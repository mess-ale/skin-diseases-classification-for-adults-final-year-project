import { useTheme } from "@emotion/react";
import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        height: '50vh',
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: theme.palette.text.main,
        }}
      />
    </Stack>
  );
};

export default LoadingPage;

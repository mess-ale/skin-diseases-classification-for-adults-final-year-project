import React from "react";
import { Link } from "react-router-dom";
import homeimage1 from "./assets/homepage.jpg";
import { Footer } from "./Footer";
import { Stack, Typography } from "@mui/material";
import HomeHeader from "./HomeHeader";

export const Home = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>

      <Stack position="relative">
        <img
          height={"750rem"}
          src={homeimage1}
          alt="for skin disease classification using machine learning code"
        />
        <Stack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Typography variant="h4">
            skin diseases classification for adults
          </Typography>
          <Typography>
            Our cutting-edge machine learning system provides accurate
            classification of adult skin diseases. Upload an image and receive a
            detailed analysis, empowering you to take informed next steps in
            your health journey.
          </Typography>
          <Link
            to="/home/upload"
            style={{
              backgroundColor: "#f0f0f0",
              color: "#333",
              padding: "0.5rem 2.4rem",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Get Started
          </Link>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Home;

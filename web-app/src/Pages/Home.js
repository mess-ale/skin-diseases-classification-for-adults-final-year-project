import React from "react";
import { Link } from "react-router-dom";
import homeimage1 from "../assets/homepage.jpg";
import { Footer } from "../components/Footer";
import { Stack, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

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
          height={"800rem"}
          src={homeimage1}
          alt="for skin disease classification using machine learning code"
        />
        <Stack spacing={"5rem"} sx={{ margin: "-40rem 0rem 6rem 0rem" }}>
          <Typography 
            variant="h1"
            sx={{ color: "#00B9FE", fontWeight: "bold", textAlign: "center" }}
          >
            skin diseases classification for adults
          </Typography>
          <Stack
            direction={"row"}
            spacing={"11rem"}
            sx={{ padding: "1rem 10rem" }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#fff", lineHeight: "1.5", textAlign: "justify" }}
            >
              Our cutting-edge machine learning system provides accurate
              classification of adult skin diseases. Upload an image and receive
              a detailed analysis, empowering you to take informed next steps in
              your health journey.
            </Typography>
            <Stack>
              <Link
                to="/join"
                style={{
                  padding: "1rem 2rem",
                  width: "100%",
                  fontFamily: "sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "#00B9FE",
                  color: "#fff",
                  borderRadius: "4px",
                  marginTop: "4rem",
                }}
              >
                Get Started
              </Link>
            </Stack>
          </Stack>
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

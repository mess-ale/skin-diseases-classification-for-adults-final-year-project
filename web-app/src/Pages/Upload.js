import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import image1 from "../assets/Gemini_Generated_Image (1).jpg";
import Hamburger from "../components/Hamburger";
import { Input, Stack, Typography } from "@mui/material";

function Upload() {
  const [imageSrc, setImageSrc] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth > 700;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isMobile ? <Header /> : <Hamburger />}

      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem" }}
        margin={{
          xs: "2rem 4rem 0rem 4rem",
          sm: "7rem 4rem 0rem 4rem",
          md: "10rem 6rem 0rem 6rem",
          lg: "10rem 10rem 0rem 10rem",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row", md: "column" }}
          spacing={{ xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem" }}
          sx={{ alignItems: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.65rem",
              },
              color: "#fff",
              lineHeight: "1.5",
              textAlign: "justify",
            }}
          >
            Get insights into your health. Upload a picture and our AI
            technology will predict potential disease classifications.
          </Typography>
          <label
            htmlFor="upload-input"
            className="label"
            style={{
              padding: "0.8rem 1.5rem",
              fontFamily: "sans-serif",
              textAlign: "center",
              textDecoration: "none",
              backgroundColor: "#fff",
              color: "#00B9FE",
              borderRadius: "4px",
              width: "15%",
            }}
          >
            Upload
          </label>
          <Input
            type="file"
            id="upload-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </Stack>

        <Stack
          alignContent={"center"}
          sx={{
            width: { xs: "70%", sm: "50%", md: "30%" },
            height: { xs: "70%", sm: "50%", md: "30%" },
          }}
        >
          {imageSrc ? (
            <Stack>
              <img
                style={{ alignItems: "center", borderRadius: "0.8rem" }}
                className="dynamicimage"
                src={imageSrc}
                alt="your sample"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                  },
                  color: "#fff",
                  lineHeight: "1.5",
                  textAlign: "center",
                }}
              >
                Your sample image!!!
              </Typography>
            </Stack>
          ) : (
            <Stack sx={{  }}>
              <img
                style={{ alignItems: "center", borderRadius: "0.8rem" }}
                className="dynamicimage"
                src={image1}
                alt="your sample"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                  },
                  color: "#fff",
                  lineHeight: "1.5",
                  textAlign: "center",
                }}
              >
                Your sample image will be here!!!
              </Typography>
            </Stack>
          )}
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
}

export default Upload;

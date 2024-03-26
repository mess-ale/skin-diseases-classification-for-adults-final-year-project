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
      {screenWidth > 700 ? <Header /> : <Hamburger />}

      <Stack
        direction={"row"}
        spacing={"5rem"}
        sx={{
          marginTop: "8rem",
        }}
      >
        <Stack sx={{ alignItems: "center", padding: '3rem 0rem 0rem 5rem'}}>
          <Typography
            variant="h6"
            sx={{ color: "#fff", lineHeight: "1.5", }}
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
              marginTop: "4rem",
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

        <Stack sx={{ width: "30%", height: "30%", paddingRight: '5rem',  }}>
          {imageSrc ? (
            <img className="dynamicimage" src={imageSrc} alt="your sample" />
          ) : (
            <img className="dynamicimage" src={image1} alt="your sample" />
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

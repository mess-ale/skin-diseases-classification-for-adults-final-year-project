import React, { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import image1 from "../assets/Gemini_Generated_Image (1).jpg";
import Hamburger from "../components/Hamburger";
import { Container, Input, Stack, Typography } from "@mui/material";

function Upload() {
  const [imageSrc, setImageSrc] = useState("");

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
      <Stack
        sx={{
          marginBottom: { sm: "0rem", md: "7rem" },
        }}
      >
        <Stack
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
          }}
        >
          <Hamburger />
        </Stack>
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          <Header />
        </Stack>
      </Stack>

      <Container>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: "4rem", sm: "4rem", md: "2rem", lg: "2rem" }}
        >
          <Stack
            spacing={{ xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
            direction={{ xs: "column", sm: "row", md: "column" }}
            sx={{
              width: { xs: "100%" },
            }}
          >
            <Stack width={{xs: '100%', sm: '50%', md: '100%'}}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.25rem",
                    lg: "1.45rem",
                  },
                  paddingTop: {
                    xs: "0rem",
                    sm: "2rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                  color: "#00C6CF",
                  lineHeight: "1.5",
                  textAlign: "justify",
                }}
              >
                Get insights into your health. Upload a picture and our AI
                technology will predict potential disease classifications.
              </Typography>
            </Stack>

            <Stack alignItems={"center"} width={{xs: '100%', sm: '50%', md: '100%'}} sx={{ 
                  paddingTop: {
                    xs: "0rem",
                    sm: "3rem",
                    md: "0rem",
                    lg: "0rem",
                  },}}>
              <label
                htmlFor="upload-input"
                className="label"
                style={{
                  padding: "0.8rem 1.5rem",
                  fontFamily: "sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundImage:
                    "linear-gradient(to right, #00C6CF, #7FD1AE)",
                  color: "#E8EAED",
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
          </Stack>

          <Stack
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              alignContent={"center"}
              sx={{
                width: { xs: "20rem", sm: "25rem" },
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
                      color: "#00C6CF",
                      lineHeight: "1.5",
                      textAlign: "center",
                    }}
                  >
                    Your sample image!!!
                  </Typography>
                </Stack>
              ) : (
                <Stack sx={{}}>
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
                      color: "#00C6CF",
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
        </Stack>
      </Container>

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

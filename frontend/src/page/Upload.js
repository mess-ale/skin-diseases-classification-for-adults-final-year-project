import React, { useState } from "react";
import image1 from "../assets/Gemini_Generated_Image (1).jpg";
import { Button, Container, Input, Stack, SvgIcon, Typography } from "@mui/material";
import { FileUpload } from "@mui/icons-material";

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
     
      <Container>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: "4rem", sm: "4rem", md: "2rem", lg: "2rem" }}
        >
          <Stack
            spacing={{ xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
            sx={{
              width: { xs: "100%" },
            }}
          >
            <Stack>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.25rem",
                    md: "1.25rem",
                    lg: "1.45rem",
                  },
                  padding: {
                    xs: "1rem 2rem 1rem 2rem",
                    sm: "2rem 3rem 0rem 3rem",
                    md: "4.5rem 0rem 2rem 2.5rem",
                    lg: "5rem 0rem 0rem 0rem",
                  },
                  color: "#00C6CF",
                  lineHeight: "1.5",
                  textAlign: "justify",
                  fontFamily: "Outfit",
                }}
              >
                Get insights into your health. Upload a picture and our AI
                technology will predict potential disease classifications.
              </Typography>
            </Stack>

            <Stack
              alignItems={"center"}
              sx={{
                paddingTop: {
                  xs: "0rem",
                  sm: "3rem",
                  md: "0rem",
                  lg: "0rem",
                },
              }}
            >
              <Button
                className="label"
                startIcon={<SvgIcon component={FileUpload} />}
                style={{
                  padding: "0.8rem 1.5rem",
                  fontFamily: "Young Serif",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundImage:
                    "linear-gradient(to right, #00C6CF, #7FD1AE)",
                  color: "#E8EAED",
                  borderRadius: "4px",
                  width: "25%",
                }}
                onClick={() => {
                  document.getElementById("upload-input").click();
                }}
              >
                Upload
              </Button>
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
                <Stack spacing={"1rem"}>
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
                      textAlign: "center",
                    }}
                  >
                    Your sample image!!!
                  </Typography>
                </Stack>
              ) : (
                <Stack spacing={"1rem"}>
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

    </Stack>
  );
}

export default Upload;

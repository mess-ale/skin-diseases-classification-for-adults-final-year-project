import React, { useState } from "react";
import image1 from "../assets/Gemini_Generated.png";
import {
  Button,
  Container,
  Input,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { FileUpload } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

function Upload() {
  const [imageSrc, setImageSrc] = useState("");
  const theme = useTheme();

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth={"md"}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: "3rem", sm: "3rem", md: "2rem", lg: "2rem" }}
        >
          <Stack
            spacing={{ xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
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
                sx={{
                  border: `solid 1px ${theme.palette.text.main}`,
                  padding: "0.6rem 2rem 0.6rem 2rem",
                  borderRadius: "1.5rem",
                  color: theme.palette.text.main,
                  "&:hover": {
                    color: theme.palette.primary.main,
                    background: "#000",
                  },
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
            <Stack alignContent={"center"} sx={{ width: {xs: '70%', sm: '100%'}, height: {xs: '70%', sm: '100%'}}}>
              {imageSrc ? (
                <Stack spacing={"1rem"}>
                  <img
                    style={{ alignItems: "center", borderRadius: "0.8rem" }}
                    className="dynamicimage"
                    src={imageSrc}
                    alt="your sample"
                    width={"100%"}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.1rem",
                        md: "1.2rem",
                      },
                      color: theme.palette.text.main,
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
                    width={"100%"}
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
                      color: theme.palette.text.main,
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

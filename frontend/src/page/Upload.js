import React, { useEffect, useState } from "react";
import image1 from "../assets/Gemini_Generated.png";
import {
  Button,
  Container,
  Grid,
  Input,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Book, FileUpload } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import axios from "../api";
import { Link } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";

function Upload() {
  const [imageSrc, setImageSrc] = useState("");
  const [predect, setPredict] = useState("use your image");
  const [diseaseData, setDiseaseData] = useState(null);
  const [loadding, setLoading] = useState(false);
  const theme = useTheme();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log(event);
    const formData = new FormData();
    formData.append("image_file", file);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPredict(response.data.predictions);
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
      setLoading(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      if (predect !== "use your image") {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/disease/${predect}/`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch disease data");
          }
          const data = await response.json();
          setDiseaseData(data);
          setLoading(false);
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
    setLoading(false);
  }, [predect]);
  console.log(loadding);
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth={"md"}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Stack
              sx={{
                boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.3)",
                borderRadius: "0.4rem",
              }}
            >
              <Stack sx={{ margin: "1.5rem" }} spacing={2}>
                {loadding ? (
                  <LoadingPage />
                ) : (
                  <Stack>
                    {imageSrc ? (
                      <Stack>
                        <img
                          style={{
                            color: "transparent",
                            width: "100%",
                            height: "auto",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "0.4rem",
                          }}
                          src={imageSrc}
                          alt="your sample"
                        />
                      </Stack>
                    ) : (
                      <Stack>
                        <img
                          style={{
                            color: "transparent",
                            width: "100%",
                            height: "auto",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "0.4rem",
                          }}
                          src={image1}
                          alt="your sample"
                        />
                      </Stack>
                    )}
                  </Stack>
                )}
                <Stack
                  sx={{
                    borderRadius: "0.4rem",
                    boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.9rem",
                        md: "1rem",
                        lg: "1.1rem",
                      },
                      padding: "1rem",
                      fontFamily: "Outfit",
                      borderRadius: "0.4rem",
                    }}
                  >
                    Get insights into your health. Upload a picture and our AI
                    technology will predict potential disease classifications.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={5}>
            {loadding ? (
              <LoadingPage />
            ) : (
              <Stack spacing={4}>
                <Stack
                  sx={{
                    borderRadius: "0.4rem",
                    boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Stack sx={{ margin: "1rem" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      disease name : {predect}
                    </Typography>
                    <Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        description
                      </Typography>
                      {diseaseData
                        ? diseaseData["description"]
                        : "This section will explain the description options available for the disease."}
                    </Typography>
                    <Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        treatment
                      </Typography>
                      {diseaseData ? (
                        <Stack>
                          {diseaseData["treatment"]}
                          <Link to="/home/Appointment" sx={{ margin: "1rem" }}>
                            <Button
                              startIcon={<Book />}
                              sx={{
                                border: `solid 1px ${theme.palette.text.main}`,
                                borderRadius: "1.5rem",
                                color: theme.palette.text.main,
                                fontWeight: "bold",
                                margin: "1rem 0",
                                "&:hover": {
                                  background: theme.palette.text.main,
                                  color: theme.palette.primary.main,
                                },
                              }}
                              fullWidth
                            >
                              Schedule Appointment
                            </Button>
                          </Link>
                        </Stack>
                      ) : (
                        "This section will explain the treatment options available for the disease."
                      )}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  sx={{
                    borderRadius: "0.4rem",
                    boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Stack sx={{ margin: "1rem" }}>
                    <Button
                      className="label"
                      startIcon={<SvgIcon component={FileUpload} />}
                      sx={{
                        border: `solid 1px ${theme.palette.text.main}`,
                        borderRadius: "1.5rem",
                        color: theme.palette.text.main,
                        margin: "1rem",
                        "&:hover": {
                          background: theme.palette.text.main,
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => {
                        document.getElementById("upload-input").click();
                      }}
                    >
                      Use your image
                    </Button>
                    <Input
                      type="file"
                      id="upload-input"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.9rem",
                          md: "1rem",
                          lg: "1.1rem",
                        },
                        fontFamily: "Outfit",
                        borderRadius: "0.4rem",
                        textAlign: "center",
                      }}
                    >
                      We think data protection is important! <span style={{ color: 'red'}}>`No data is sent.`</span>
                      The magic happens in your browser.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Upload;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeimage1 from "../assets/homepage.png";
import { Footer } from "../components/Footer";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import disease1 from "../assets/ISIC_0024468 1.png";
import disease2 from "../assets/ISIC_0024468 2.png";
import disease3 from "../assets/ISIC_0024468 3.png";
import disease4 from "../assets/ISIC_0024468 4.png";
import disease5 from "../assets/ISIC_0024468 5.png";
import disease6 from "../assets/ISIC_0024468 6.png";
import disease7 from "../assets/ISIC_0024468 7.png";
import disease8 from "../assets/ISIC_0024468 8.png";
import HamburgerHome from "../components/HamburgerHome";

export const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const linkStyle1 = {
    color: "white",
    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.65rem", lg: "2rem" },
    paddingTop: { xs: "0.4rem", sm: "0.6", md: "0.8rem" },
    fontWeight: "bold",
  };

  const linkStyle2 = {
    color: "white",
    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.15rem" },
    padding: {
      xs: "0.8rem 0rem 1.2rem 0rem",
      sm: "1rem 0rem 1.5rem 0rem",
      md: "1.2rem 0rem 1.7rem 0rem",
    },
  };

  const linkStyle3 = {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
    color: "#000",
    width: { xs: "30%", sm: "50%" },
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  };

  const styles = {
    backgroundImage: `url(${homeimage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobil = screenWidth > 700;

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack sx={isMobil ? { marginBottom: "8rem" } : { marginBottom: "0rem" }}>
        {isMobil ? <HomeHeader /> : <HamburgerHome />}
      </Stack>

      <Container sx={styles}>
        <Stack padding={{ xs: "1.5rem", sm: "2.5rem", md: "4rem", lg: "5rem" }}>
          <Typography
            sx={{
              color: "#00B9FE",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            }}
          >
            skin diseases classification for adults
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          padding={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
        >
          <Stack width={{ sm: "95%", md: "60%" }}>
            <Typography
              sx={{
                color: "#fff",
                lineHeight: { xs: "1.24", sm: "1.4", md: "1.5" },
                textAlign: "justify",
                padding: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Our cutting-edge machine learning system provides accurate
              classification of adult skin diseases. Upload an image and receive
              a detailed analysis, empowering you to take informed next steps in
              your health journey.
            </Typography>
          </Stack>

          <Stack
            padding={{ xs: "1.5rem", sm: "1.75rem", md: "2rem" }}
            width={{ sm: "95%", md: "40%" }}
            sx={{
              alignItems: "center",
              marginTop: { xs: "3rem", sm: "3.5rem", md: "4rem" },
            }}
          >
            <Button
              align="center"
              sx={{
                fontFamily: "sans-serif",
                textAlign: "center",
                width: "40%",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.8rem",
                  md: "0.85rem",
                  lg: "1rem",
                },
                backgroundColor: "#00B9FE",
                color: "#fff",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/join">
                Get Started
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Container
        sx={{
          marginTop: { xs: "5rem", sm: "6rem", md: "7rem" },
          marginBottom: { xs: "7rem", sm: "9rem", md: "14rem" },
        }}
      >
        <Grid container spacing={"4rem"}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease1}
                alt="actinic keratosis"
              />
              <Typography sx={linkStyle1}>actinic keratosis</Typography>
              <Typography align="justify" sx={linkStyle2}>
                Actinic keratosis (AK) is a precancerous skin condition caused
                by excessive sun exposure. It appears as rough, scaly patches on
                the skin, often on the face, scalp, or hands. While not
                cancerous itself, AK can develop into skin cancer if left
                untreated.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.aad.org/public/diseases/skin-cancer/actinic-keratosis"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease2}
                alt="basal cell carcinoma"
              />
              <Typography sx={linkStyle1}>basal cell carcinoma</Typography>
              <Typography align="justify" sx={linkStyle2}>
                Basal cell carcinoma (BCC) is the most common type of skin
                cancer. It arises from the uncontrolled growth of abnormal basal
                cells, which are located in the outermost layer of your skin
                (epidermis).
              </Typography>
              <Button
                sx={linkStyle3}
                href=" https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease3}
                alt="dermatofibroma"
              />
              <Typography sx={linkStyle1}>dermatofibroma</Typography>
              <Typography align="justify" sx={linkStyle2}>
                A dermatofibroma, also known as a cutaneous fibrous
                histiocytoma, is a harmless growth that develops in the deeper
                layers of the skin (dermis). It's one of the most frequent
                benign skin tumors.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.aad.org/public/diseases/a-z/dermatofibroma"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease4}
                alt="melanoma"
              />
              <Typography sx={linkStyle1}>melanoma</Typography>
              <Typography align="justify" sx={linkStyle2}>
                Melanoma is the most dangerous type of skin cancer. It arises
                from pigment-producing cells (melanocytes) in the skin and can
                spread to other parts of the body if left untreated. Early
                detection and treatment are crucial for a good prognosis.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.cancer.org/cancer/melanoma-skin-cancer.html"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease5}
                alt="nevus"
              />
              <Typography sx={linkStyle1}>nevus</Typography>
              <Typography align="justify" sx={linkStyle2}>
                A nevus, plural nevi, is a general term for a colored growth on
                the skin, often referred to as a mole or birthmark. Nevi are
                very common; most people have between 10 and 40. They can be
                present at birth (congenital nevi) or develop later in life
                (acquired nevi).
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.aad.org/public/everyday-care/skin-care-secrets/routine/moles"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease6}
                alt="pigmented benign keratosis"
              />
              <Typography sx={linkStyle1}>
                pigmented benign keratosis
              </Typography>
              <Typography align="justify" sx={linkStyle2}>
                Pigmented benign keratosis (PBK) is a general term encompassing
                two common, non-cancerous skin growths: 1, Seborrheic keratosis
                (SK): These are the most frequent type of PBK. 2, Solar lentigo
                (actinic lentigo): Also known as age spots or sun spots.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.aad.org/public/diseases/bumps-and-growths/seborrheic-keratoses"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease7}
                alt="squamous cell carcinoma"
              />
              <Typography sx={linkStyle1}>squamous cell carcinoma</Typography>
              <Typography align="justify" sx={linkStyle2}>
                Squamous cell carcinoma (SCC) is the second most common type of
                skin cancer, affecting millions of people worldwide. It arises
                from the uncontrolled growth of abnormal squamous cells, which
                are flat cells found in the outer layer of your skin (epidermis)
                and mucous membranes lining various organs.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.cancer.org/cancer/squamous-cell-skin-cancer.html"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack>
              <img
                src={disease8}
                alt="vascular lesion"
              />
              <Typography sx={linkStyle1}>vascular lesion</Typography>
              <Typography align="justify" sx={linkStyle2}>
                A vascular lesion is a general term for an abnormal growth or
                malformation of blood vessels in the skin or underlying tissues.
                They can be present at birth (congenital) or develop later in
                life (acquired). Vascular lesions come in a variety of types,
                with varying appearances and causes.
              </Typography>
              <Button
                sx={linkStyle3}
                href="https://www.aad.org/public/diseases/bumps-and-growths/vascular-birthmarks"
                target="_blank"
              >
                More info
              </Button>
            </Stack>
          </Grid>
        </Grid>
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
};

export default Home;

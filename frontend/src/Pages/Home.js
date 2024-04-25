import React from "react";
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
import CardComponent from "../components/CardComponent";

export const Home = () => {
  const styles = {
    backgroundImage: `url(${homeimage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack sx={{ marginBottom: { sm: "0rem", md: "7rem" } }}>
        <Stack
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
          }}
        >
          <HamburgerHome />
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
          <HomeHeader />
        </Stack>
      </Stack>

      <Container sx={styles}>
        <Stack padding={{ xs: "1.5rem", sm: "2.5rem", md: "4rem", lg: "5rem" }}>
          <Typography
            sx={{
              color: "#E8EAED",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              fontFamily: "Young Serif",
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
                color: "#E8EAED",
                lineHeight: { xs: "1.24", sm: "1.4", md: "1.5" },
                textAlign: "justify",
                padding: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                fontFamily: "Outfit",
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
                backgroundColor: "#00C6CF",
                color: "#fff",
                borderRadius: "4px",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to right, #00C6CF, #7FD1AE)",
                },
              }}
            >
              <Link
                style={{ textDecoration: "none", fontFamily: "Young Serif" }}
                to="/join"
              >
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
            <CardComponent
              imge={disease1}
              title={"actinic keratosis"}
              desc="Actinic keratosis (AK) is a precancerous skin condition caused
                by excessive sun exposure. It appears as rough, scaly patches on
                the skin, often on the face, scalp, or hands. While not
                cancerous itself, AK can develop into skin cancer if left
                untreated."
              link={
                "https://www.aad.org/public/diseases/skin-cancer/actinic-keratosis"
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease2}
              title={"basal cell carcinoma"}
              desc="
              Basal cell carcinoma (BCC) is the most common type of skin
              cancer. It arises from the uncontrolled growth of abnormal basal
              cells, which are located in the outermost layer of your skin
              (epidermis)."
              link={
                "https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma"
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease3}
              title={"dermatofibroma"}
              desc="
              A dermatofibroma, also known as a cutaneous fibrous
              histiocytoma, is a harmless growth that develops in the deeper
              layers of the skin (dermis). It's one of the most frequent
              benign skin tumors."
              link={"https://www.aad.org/public/diseases/a-z/dermatofibroma"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease4}
              title={"melanoma"}
              desc="
              Melanoma is the most dangerous type of skin cancer. It arises
              from pigment-producing cells (melanocytes) in the skin and can
              spread to other parts of the body if left untreated. Early
              detection and treatment are crucial for a good prognosis."
              link={"https://www.cancer.org/cancer/melanoma-skin-cancer.html"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease5}
              title={"nevus"}
              desc="A nevus, plural nevi, is a general term for a colored growth on
              the skin, often referred to as a mole or birthmark. Nevi are
              very common; most people have between 10 and 40. They can be
              present at birth (congenital nevi) or develop later in life
              (acquired nevi)."
              link={
                "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/moles"
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease6}
              title={"pigmented benign keratosis"}
              desc="
              Pigmented benign keratosis (PBK) is a general term encompassing
              two common, non-cancerous skin growths: 1, Seborrheic keratosis
              (SK): These are the most frequent type of PBK. 2, Solar lentigo
              (actinic lentigo): Also known as age spots or sun spots."
              link={
                "https://www.aad.org/public/diseases/bumps-and-growths/seborrheic-keratoses"
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease7}
              title={"squamous cell carcinoma"}
              desc="
              Squamous cell carcinoma (SCC) is the second most common type of
              skin cancer, affecting millions of people worldwide. It arises
              from the uncontrolled growth of abnormal squamous cells, which
              are flat cells found in the outer layer of your skin (epidermis)
              and mucous membranes lining various organs."
              link={
                "https://www.cancer.org/cancer/squamous-cell-skin-cancer.html"
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imge={disease8}
              title={"vascular lesion"}
              desc="
              A vascular lesion is a general term for an abnormal growth or
              malformation of blood vessels in the skin or underlying tissues.
              They can be present at birth (congenital) or develop later in
              life (acquired). Vascular lesions come in a variety of types,
              with varying appearances and causes."
              link={
                "https://www.aad.org/public/diseases/bumps-and-growths/vascular-birthmarks"
              }
            />
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

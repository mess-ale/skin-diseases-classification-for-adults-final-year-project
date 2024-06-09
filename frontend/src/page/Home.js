import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import homeimage1 from "../assets/homepage.png";
import homeimage2 from "../assets/GettyImages.png";
import desis from "../assets/ISIC_0024468 1.png";
import desis1 from "../assets/ISIC_0024468 2.png";
import homeimage3 from "../assets/GettyImages2.png";
import disease6 from "../assets/ISIC_0024468 6.png";
import disease7 from "../assets/ISIC_0024468 7.png";
import disease8 from "../assets/ISIC_0024468 8.png";
import contactimg from "../assets/contactimage.png";
import Employee from "../assets/theam.jpg";
import Employee1 from "../assets/theam4.jpg";
import Employee2 from "../assets/theam1.jpg";
import Employee3 from "../assets/theam2.jpg";
import Employee4 from "../assets/theam3.jpg";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import Upload from "./Upload";
import {
  AccessTimeOutlined,
  BarChartOutlined,
  CameraAltOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import CardComponent from "../components/CardComponent";
import Contact from "../components/Contact";
import { ACCESS_TOKEN, TOKEN_EXPIRATION } from "../constants";
import Footer from "../components/Footer";

function isLoggedIn() {
  const token = localStorage.getItem(ACCESS_TOKEN);

  // Check if token exists
  if (token === null) {
    return false;
  }

  // Check if token is expired
  const expirationTime = localStorage.getItem(TOKEN_EXPIRATION);
  if (expirationTime !== null && Date.now() > parseInt(expirationTime)) {
    // Token has expired, remove it from localStorage
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_EXPIRATION);
    return false;
  }

  return true;
}

const services = [
  {
    icon: <CameraAltOutlined />,
    text: "Upload a Photo",
    description:
      "Snap a picture of your skin concern directly through our website.",
  },
  {
    icon: <AccessTimeOutlined />,
    text: "Instant Classification",
    description:
      "Get a fast analysis of potential skin conditions. Our AI works tirelessly to bring you results in seconds.",
  },
  {
    icon: <InfoOutlined />,
    text: "Starting Point for Diagnosis",
    description:
      "Use our results to begin a conversation with your doctor. We empower you with information to take charge of your skin health.",
  },
  {
    icon: <BarChartOutlined />,
    text: "Track Your Progress (Coming Soon)",
    description:
      "Monitor your skin concerns over time by saving past uploads and results. See how your skin responds to treatment.",
  },
  {
    icon: <InfoOutlined />,
    text: "Learn More",
    description:
      "Access a library of informative articles and resources about common skin conditions. Become your own skin care expert!",
  },
];

function Home() {
  const theme = useTheme();

  const styles = {
    backgroundImage: `url(${homeimage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: "100%",
  };

  return (
    <Stack>
      <Stack>
        <Header />
      </Stack>

      {!isLoggedIn() ? (
        <Stack
          paddingTop={{ xs: "3.5rem", md: "5rem" }}
          sx={{
            position: "sticky",
            top: 0 /* Adjust top position as needed */,
            height: "88vh",
          }}
        >
          <Container sx={styles}>
            <Stack
              padding={{ xs: "1.5rem", sm: "2rem", md: "4rem", lg: "5rem" }}
            >
              <Typography
                sx={{
                  color: theme.palette.text.default,
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
              padding={{ xs: "1rem", sm: "1.5rem", md: "1.5rem", lg: "2rem" }}
            >
              <Stack width={{ sm: "95%", md: "60%" }}>
                <Typography
                  sx={{
                    color: theme.palette.text.default,
                    lineHeight: { xs: "1.24", sm: "1.4", md: "1.5" },
                    textAlign: "justify",
                    padding: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    fontFamily: "Outfit",
                  }}
                >
                  Our cutting-edge machine learning system provides accurate
                  classification of adult skin diseases. Upload an image and
                  receive a detailed analysis, empowering you to take informed
                  next steps in your health journey.
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
                <Link style={{ textDecoration: "none" }} to="/join">
                  <Button
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.85rem",
                        lg: "1rem",
                      },
                      background: theme.palette.primary.main,
                      color: theme.palette.text.main,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                      borderRadius: "4px",
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      ) : (
        <Stack paddingTop={{ xs: "4rem", sm: "8rem" }} paddingBottom={"2.5rem"}>
          <Upload />
        </Stack>
      )}

      <Stack
        sx={{
          position: "sticky",
          top: { xs: "calc(3.5rem + 15px)", md: "calc(5rem + 15px)" },
        }}
      >
        <img
          src={homeimage2}
          alt="treatment"
          style={{
            borderRadius: "40px 40px 0 0",
            marginTop: "-1rem",
            width: "100%",
            height: "100%",
          }}
        />
      </Stack>

      <Stack
        sx={{
          background: theme.palette.background.default,
          borderRadius: "40px 40px 0 0",
          zIndex: 1,
        }}
      >
        <Typography
          id="section1"
          sx={{
            margin: { xs: "3rem 0", md: "5rem 3rem" },
            fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.5rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          About Us
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                marginLeft: { md: "8rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Our commitment to technology-driven health
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <svg width={"80%"} height={"100%"} viewBox="0 0 400 200">
              <path
                d="M 0 100 C 100 50, 200 150, 400 90"
                stroke={theme.palette.text.main}
                fill="transparent"
                stroke-width="2"
              />
            </svg>
          </Grid>

          <Grid item xs={6} md={3}>
            <img
              src={desis}
              style={{ width: "100%", height: "100%" }}
              alt="lsdj"
            />
          </Grid>

          <Grid item xs={6} md={3} paddingBottom={{ md: "2rem" }}>
            <img
              src={desis1}
              style={{ width: "100%", height: "100%" }}
              alt="lsdj"
            />
          </Grid>

          <Grid item sm={6} md={8}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                margin: { xs: "3rem 0 3rem 0", md: "7rem 10rem 3rem 1rem" },
                textAlign: { xs: "center" },
              }}
            >
              We are a team of tech enthusiasts on a mission to make skin health
              a breeze! We've developed a machine learning model that can
              identify different skin conditions. Think of us as your friendly
              neighborhood skin whisperer... in app form!
            </Typography>
          </Grid>
        </Grid>

        <Stack
          sx={{
            background: theme.palette.secondary.main,
            borderRadius: "40px 40px 0 0",
            zIndex: 1,
          }}
        >
          <Typography
            id="section2"
            sx={{
              margin: { xs: "3rem 0", md: "5rem 3rem" },
              fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.5rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Our Services
          </Typography>
          <Container maxWidth={"md"} sx={{ paddingBottom: "13rem" }}>
            <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Stack direction={"row"} alignItems={"center"}>
                    {service.icon}
                    <Typography sx={{ fontWeight: "bold" }}>
                      {service.text}
                    </Typography>
                  </Stack>
                  <Typography>{service.description}</Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Stack
            minHeight={"100vh"}
            sx={{
              position: "sticky",
              top: { xs: "calc(3.5rem)", md: "calc(5rem)" },
              backgroundImage: `url(${homeimage3})`,
              borderRadius: "40px 40px 0 0",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                margin: { xs: "3rem 0", md: "5rem 3rem" },
                fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              Unleash the Power of Your Skin Health
            </Typography>
          </Stack>

          <Container
            sx={{
              marginBottom: { xs: "2rem", sm: "3rem", md: "7rem" },
            }}
          >
            <Grid container spacing={"4rem"}>
              <Grid item xs={12} sm={6} md={4}>
                <CardComponent
                  imge={disease6}
                  title={"Melanocytic Nevi (nv)"}
                  desc="
              Melanocytic nevi, commonly called moles, are growths on the skin that are usually brown or black. They are 
              very common and most people have at least a few."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <CardComponent
                  imge={disease7}
                  title={"Melanoma (mel)"}
                  desc="
              Melanoma is the most serious type of skin cancer. It arises from melanocytes, 
              the cells that produce melanin, the pigment that gives skin its color. People with lighter skin tones are more susceptible."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <CardComponent
                  imge={disease8}
                  title={"Benign Keratosis-like Lesions (bkl)"}
                  desc="
              Benign keratosis-like lesions (BKL) are a broad term encompassing a group of non-cancerous
               (benign) skin growths that resemble keratoses, which are rough, wart-like growths on the skin.
"
                />
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Stack>

      <Stack
        sx={{
          background: theme.palette.background.main,
          borderRadius: "40px 40px 0 0",
          marginTop: "-1rem",
          zIndex: 3,
        }}
      >
        <Typography
          id="section3"
          sx={{
            margin: { xs: "3rem 0", md: "5rem 3rem" },
            fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.5rem" },
            textAlign: { xs: "center", md: "left" },
            color: theme.palette.primary.main,
          }}
        >
          Our team of professionals
        </Typography>
        <Grid
          container
          sx={{
            padding: {
              xs: "1rem 1rem 2rem 1rem",
              sm: "2rem 2rem 2.5rem 2rem",
              md: "1.5rem 6rem 3rem 6rem",
              lg: "1rem 10rem 4rem 10rem",
            },
            color: theme.palette.primary.main,
          }}
          spacing={{ xs: "2rem", sm: "3rem", md: "2rem" }}
          alignItems={{ sm: "center" }}
          textAlign={"center"}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img
                src={Employee}
                style={{ maxHeight: "45vh", minHeight: "45vh" }}
                alt="black man"
              />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Desta Damtew</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img
                src={Employee1}
                style={{ maxHeight: "45vh", minHeight: "45vh" }}
                alt="black man"
              />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Meaza Gebremariam</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img
                src={Employee2}
                style={{ maxHeight: "45vh", minHeight: "45vh" }}
                alt="black man"
              />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Samuel Addis </Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img
                src={Employee3}
                style={{ maxHeight: "45vh", minHeight: "45vh" }}
                alt="black man"
              />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Aster Tsegaye</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img
                src={Employee4}
                style={{ maxHeight: "45vh", minHeight: "45vh" }}
                alt="black man"
              />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Hanna Fisseha</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          background: theme.palette.background.last,
          borderRadius: "40px 40px 0 0",
          marginTop: "-1.5rem",
          color: theme.palette.text.main,
          zIndex: 3,
        }}
      >
        <Container
          sx={{
            color: theme.palette.text.main,
          }}
        >
          <Typography
            id="section4"
            sx={{
              fontSize: { xs: "30px", md: "38px" },
              padding: "3.5rem 0 1rem 0",
            }}
          >
            It’s all about a dialogue
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            A few words from our patients .
          </Typography>
        </Container>

        <Stack>
          <Grid
            container
            spacing={"1rem"}
            padding={{
              xs: "1rem",
              sm: "1.5rem 2rem 2rem 2rem",
              md: "3rem 3rem 3rem 6rem",
              lg: "3.5rem 3.5rem 3.5rem 10rem",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: theme.palette.primary.main,
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: theme.palette.text.main,
                }}
                spacing={"2rem"}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  "Before coming here, managing my chronic pain was a constant
                  struggle. This clinic's approach, combining traditional
                  medicine with cutting-edge technology, has been a
                  game-changer. I finally feel like I'm regaining control of my
                  health."
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: theme.palette.primary.main,
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: theme.palette.text.main,
                }}
                spacing={"2rem"}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  "I was hesitant about using a new doctor at my age, but the
                  staff here has put me at ease. They're incredibly patient and
                  explain everything clearly. The treatments have given me
                  renewed energy and mobility. thanks"
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: theme.palette.primary.main,
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: theme.palette.text.main,
                }}
                spacing={"2rem"}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  "Finding childcare for doctor appointments is usually a
                  nightmare. This clinic's flexible hours and telehealth options
                  have been a lifesaver. Plus, the doctors are wonderful with
                  kids, putting both of us at ease."
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      <Stack
        id="section5"
        sx={{
          backgroundImage: `url(${contactimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px 10px 0 0",
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      >
        <Contact />
      </Stack>

      <Stack sx={{ marginTop: "-2rem" }}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default Home;

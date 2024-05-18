import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import homeimage1 from "../assets/homepage.png";
import homeimage2 from "../assets/GettyImages.png";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

function Home() {
  const theme = useTheme();

  const styles = {
    backgroundImage: `url(${homeimage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
  };

  return (
    <Stack>
      <Stack paddingBottom={{ xs: "3.5rem", md: "5rem" }}>
        <Header />
      </Stack>

      <Container sx={styles}>
        <Stack padding={{ xs: "1.5rem", sm: "2.5rem", md: "4rem", lg: "5rem" }}>
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
          padding={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
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

      <Stack>
        <img
          src={homeimage2}
          alt="treatment"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "40px 40px 0 0",
            marginTop: '-0.5rem',
            width: "100%",
            height: "100%",
          }}
        />
      </Stack>

      <Stack id="section1" sx={{ background: theme.palette.secondary.main}}>
        <Typography>About Us</Typography>
        <Grid container>
          <Grid item>
            <Typography>Our commitment to
home health care</Typography>
          </Grid>
        </Grid>
      </Stack>
      
      <Stack height={"120vh"}>
        <Typography id="section2">Our Services</Typography>
      </Stack>
      <Stack height={"120vh"}>
        <Typography id="section3">Our Team</Typography>
      </Stack>
      <Stack height={"120vh"}>
        <Typography id="section4">Reviews</Typography>
      </Stack>
      <Stack height={"120vh"}>
        <Typography id="section5">Contact</Typography>
      </Stack>
    </Stack>
  );
}

export default Home;

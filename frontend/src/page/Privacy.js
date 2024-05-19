import React from "react";
import { Footer } from "../components/Footer";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../components/Header";

function Prediction() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "3rem 0.6rem 3rem 0.6rem",
            sm: "4rem 1.8rem 2rem 1.8rem",
            md: "6rem 3rem 3rem 3rem",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h2">
              Privacy Policy
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              A legal disclaimer
            </Typography>
            <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
              {/* Privacy Policy Content */}
              At Worldview Training and Consulting Service PLC, we value and
              respect your privacy. This Privacy Policy explains how we collect,
              use, disclose, and protect your personal information when you
              visit our website. By accessing and using our website, you consent
              to the practices described in this Privacy Policy.
              {/* Information We Collect Section */}
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Information We Collect
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                When you visit our website, we may collect certain information
                automatically, such as your IP address, browser type, device
                information, and browsing behavior. We may also collect personal
                information that you voluntarily provide to us through contact
                forms or when subscribing to our newsletters.
              </Typography>
              {/* Use of Collected Information Section */}
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Use of Collected Information
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                We use the information we collect to improve our website,
                provide relevant content and services, respond to inquiries, and
                communicate with you. We may also use your information to send
                promotional materials or updates about our offerings, but only
                if you have provided your consent to receive such
                communications.
              </Typography>
              {/* Data Security Section */}
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Data Security
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. However, please be aware that no
                method of transmission over the internet or electronic storage
                is 100% secure. While we strive to protect your information, we
                cannot guarantee its absolute security.
              </Typography>
            </Typography>
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
}

export default Prediction;

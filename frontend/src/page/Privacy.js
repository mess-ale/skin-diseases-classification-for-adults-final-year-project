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
              The images you upload to our skin disease classification service
              are used solely for the purpose of providing you with a
              classification result. We understand the sensitivity of your
              health information and take data privacy very seriously. Here's
              what you can expect:
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Limited Use
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                Your uploaded images are strictly used for classification and
                are not used for any other purpose.
              </Typography>
              {/* Use of Collected Information Section */}
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Data Security
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                We implement robust security measures to protect your images
                from unauthorized access, disclosure, or misuse.
              </Typography>
              {/* Data Security Section */}
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                No Third-Party Sharing
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                We will not share your uploaded images with any third party
                without your explicit consent.
              </Typography>
              <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
                Data Retention
              </Typography>
              <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
                We may retain your images for a limited period to improve the
                accuracy of our service. However, we have procedures in place
                for secure deletion upon request.
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

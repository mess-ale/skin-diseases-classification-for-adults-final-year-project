import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Phonelink } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "../api";
import { useTheme } from "@emotion/react";

function Contact() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/user/contact/", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      navigate("/home/ContactSuccess");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: theme.palette.primary.main,
        "& .MuiInputLabel-root": {
          color: theme.palette.text.main,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ py: 8, paddingTop: { xs: "5rem", md: "10rem" } }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              We'd love to hear from you! Feel free to reach out using the form
              below or any of the contact details provided.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                <Phonelink color='primary'/>
              </IconButton>
              <Typography variant="body1" sx={{ ml: 1 }}>
                +251918645660
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                <Email color='primary'/>
              </IconButton>
              <Typography variant="body1" sx={{ ml: 1 }}>
                skindisease@gmail.com
              </Typography>
            </Box>
            <Typography variant="body1">
              Bole Sub City, Addis Ababa, Ethiopia
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: theme.palette.primary.main,
                padding: "0.8rem 0.8rem 2.5rem 0.8rem",
                borderRadius: "0.8rem",
              }}
            >
              <TextField
                label="Name"
                color="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                color="text"
                fullWidth
                required
                type="email"
              />
              <TextField
                label="Message"
                name="message"
                sx={{ color: theme.palette.primary.main }}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                color="text"
                fullWidth
                multiline
                minRows={4}
                required
              />
              <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Contact;

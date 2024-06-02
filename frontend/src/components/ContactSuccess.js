import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import React from "react";

const ContactSuccess = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CheckCircleOutlineOutlined sx={{ fontSize: 80, color: 'green' }} />
      <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
      Message Sent Successfully!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Thank you for reaching out to DreamAi. We appreciate your interest and will be in touch shortly. 
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 4 }} href="/">
        Go to Homepage
      </Button>
    </Container>
  );
};

export default ContactSuccess;

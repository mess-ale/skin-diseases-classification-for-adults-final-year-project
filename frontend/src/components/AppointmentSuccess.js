import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

const AppointmentSuccess = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CheckCircleOutlineOutlined sx={{ fontSize: 80, color: 'green' }} />
      <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
        Appointment Booked Successfully!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Your appointment details have been sent to your email address.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 4 }} href="/">
        Go to Homepage
      </Button>
    </Container>
  );
};

export default AppointmentSuccess;

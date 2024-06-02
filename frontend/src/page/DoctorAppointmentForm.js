import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

const DoctorAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    disease: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/user/appointment/", {
        name: formData.name,
        email: formData.email,
        disease: formData.disease,
        date: formData.date,
        time: formData.time,
      });
      navigate("/home/AppointmentSuccess");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              color="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Disease type"
              variant="outlined"
              fullWidth
              color="text"
              name="disease"
              value={formData.disease}
              onChange={handleChange}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="date"
              value={formData.date}
              onChange={handleChange}
              margin="normal"
              color="text"
              required
              label="date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="time"
              value={formData.time}
              onChange={handleChange}
              margin="normal"
              color="text"
              required
              label="Time"
              type="time"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default DoctorAppointmentForm;

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import api from "../api";

const ProfileDialog = ({ open, onClose, name }) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
  });
  const theme = useTheme();

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await api.post("http://127.0.0.1:8000/api/user/profile/", {
        first_name: profile.firstName,
        last_name: profile.lastName,
        country: profile.country,
        gender: profile.gender,
        age: profile.age,
      });
      onClose();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": { backgroundColor: theme.palette.primary.main },
      }}
    >
      <DialogTitle>Profile Information</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ color: theme.palette.primary.main }}
          color="text"
          margin="dense"
          name="firstName"
          label="First Name"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          sx={{ color: theme.palette.primary.main }}
          color="text"
          margin="dense"
          name="lastName"
          label="Last Name"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          sx={{ color: theme.palette.primary.main }}
          color="text"
          margin="dense"
          name="age"
          label="Age"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={handleChange}
        />
        <TextField
          sx={{ color: theme.palette.primary.main }}
          color="text"
          margin="dense"
          name="gender"
          label="Gender"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          sx={{ color: theme.palette.primary.main }}
          color="text"
          margin="dense"
          name="country"
          label="Country"
          type="text"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="text">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="text">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;

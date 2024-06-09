import { Delete, Logout } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";
import { useTheme } from "@emotion/react";

const LogoutDialog = ({ dialog, desc, username }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear tokens, redirect)
    setOpen(false);
    navigate("/logout");
  };

  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        startIcon={dialog === "Log out" ? <Logout /> : <Delete />}
        sx={{ background: dialog === "Log out" ? "" : "#dc3545" }}
        onClick={handleClickOpen}
      >
        {dialog}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to {dialog}?</DialogTitle>
        <DialogContent>
          <DialogContentText>{desc}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="text">
            Cancel
          </Button>
          <Button
            onClick={dialog === "Log out" ? handleLogout : () => {
              axios
                .delete(`http://127.0.0.1:8000/api/user/${username}/`)
                .then((response) => {
                  setOpen(false);
                  navigate("/join");
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
            sx={{ color: dialog === "Log out" ? theme.palette.text.main : '#dc3545' }}
            autoFocus
            variant="contained"
          >
            {dialog}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;

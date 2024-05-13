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

const logoutButtonStyles = {
  backgroundColor: "#E8EAED",
  color: "#ff4800",
  "&:hover": {
    backgroundColor: "#ff4800",
    color: "#fff",
  },
};

const dialogStyles = {
  "& .MuiDialog-paper": {
    backgroundColor: "#E8EAED",
  },
  "& .MuiButton-contained": {
    color: "#fff",
  },
};

const LogoutDialog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        sx={logoutButtonStyles} // Apply styles to the button
        onClick={handleClickOpen}
      >
        Logout
      </Button>
      <Dialog open={open} onClose={handleClose} sx={dialogStyles}>
        <DialogTitle>Are you sure you want to log out?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Clicking logout will end your current session.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;

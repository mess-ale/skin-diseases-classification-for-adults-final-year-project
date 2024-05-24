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
        onClick={handleClickOpen}
      >
        Logout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to log out?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Clicking logout will end your current session.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="text">Cancel</Button>
          <Button onClick={handleLogout} color="text" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;

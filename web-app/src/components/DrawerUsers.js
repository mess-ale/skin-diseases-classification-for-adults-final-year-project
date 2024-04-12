import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function DrawerUsers() {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <IconButton onClick={() => setOpen(true)}>
        <Avatar />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List sx={{ padding: "4rem 3rem 0rem 2rem" }}>
          <Stack direction="row" spacing="1rem" paddingBottom="3rem">
            <Avatar />
            <Typography paddingTop="0.7rem">Meseret Alemnew</Typography>
          </Stack>
          <Stack spacing="2rem">
            <Typography>Name: Meseret Alemenw</Typography>
            <Typography>Email: alemenwmeseret@gmail.com</Typography>
            <Typography>
              Night Mode: <Switch />
            </Typography>
          </Stack>
          <Stack paddingTop="7rem" spacing="2rem">
            <Divider />
            <Button
              style={{
                justifyContent: "flex-start", // Align icon and text
                color: "#999", // Adjust button color
                "&:hover": {
                  backgroundColor: "#eee", // Add hover effect
                },
              }}
              startIcon={<Logout />}
            >
              LogOut
            </Button>
          </Stack>
        </List>
      </Drawer>
    </Stack>
  );
}

export default DrawerUsers;

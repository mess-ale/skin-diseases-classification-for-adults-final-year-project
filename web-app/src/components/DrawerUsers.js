import { Edit, Logout } from "@mui/icons-material";
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
      <IconButton onClick={() => setOpen(true)} sx={{ color: "#3f51b5" }}>
        <Avatar />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List sx={{ padding: "4rem 6rem 0rem 2rem" }}>
          <Stack direction="row" spacing="1rem" paddingBottom="1.5rem">
            <Avatar sx={{ backgroundColor: "#3f51b5" }} />
            <Typography paddingTop="0.7rem" sx={{ fontWeight: "bold" }}>
              Meseret Alemnew
            </Typography>
          </Stack>
          <Stack paddingBottom={'2.5rem'}>
            <Divider />
          </Stack>
          <Stack spacing="1rem">
            <Typography sx={{ color: "#757575" }}>
              Name: Meseret Alemenw
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              Date of birth: 22/12/2023
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              Gender: male
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              Addrase: addis ababa
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              phone number: 094839489
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              Night Mode: <Switch />
            </Typography>
          </Stack>
          <Stack paddingTop="5rem" spacing="2rem">
            <Divider />
            <Stack spacing={"0.5rem"} paddingTop={"1.5rem"}>
              <Button
                startIcon={<Edit />}
                sx={{
                  color: "#3f51b5",
                  justifyContent: "flex-start",
                }}
              >
                Edit your profile
              </Button>
              <Button
                startIcon={<Logout />}
                sx={{ color: "#f44336", justifyContent: "flex-start" }}
              >
                LogOut
              </Button>
            </Stack>
          </Stack>
        </List>
      </Drawer>
    </Stack>
  );
}

export default DrawerUsers;

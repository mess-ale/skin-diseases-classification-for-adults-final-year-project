import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoutDialog from "./LogoutDialog";
import api from "../api";
import { useTheme } from "@emotion/react";

function DrawerUsers() {
  const [open, setOpen] = useState(false);
  const [userDataName, setUserDataName] = useState('');
  const [userDataEmail, setUserDataEmail] = useState('');
  const theme = useTheme();

  useEffect(() => {
    api.get('http://127.0.0.1:8000/api/user/data/')
    .then(response => {
      const userData = response.data;
      setUserDataName(userData.username);
      setUserDataEmail(userData.email);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []); 

  return (
    <Stack sx={{ background: theme.palette.primary.main}}>
      <Stack onClick={() => setOpen(true)} direction={'row'} alignItems={'center'} sx={{ cursor: 'pointer'}}>
        <IconButton  sx={{ color: theme.palette.text.main }}>
          <Avatar />
        </IconButton>
        <Typography sx={{ color: theme.palette.text.main,}}>{userDataName}</Typography>
      </Stack>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ padding: "4rem 6rem 0rem 2rem" }}>
          <Stack direction="row" spacing="1rem" paddingBottom="1.5rem">
            <Avatar sx={{ backgroundColor: "#3f51b5" }} />
            <Typography paddingTop="0.7rem" sx={{ fontWeight: "bold" }}>
              {userDataName}
            </Typography>
          </Stack>
          <Stack paddingBottom={"2.5rem"}>
            <Divider />
          </Stack>
          <Stack spacing="1rem">
            <Typography sx={{ color: theme.palette.text.main }}>
              Name: {userDataName}
            </Typography>
            <Typography sx={{ color: theme.palette.text.main }}>Email: {userDataEmail}</Typography>
          </Stack>
          <Stack paddingTop="5rem" spacing="2rem">
            <Divider />
            <LogoutDialog />
          </Stack>
        </List>
      </Drawer>
    </Stack>
  );
}

export default DrawerUsers;

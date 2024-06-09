import {
  Avatar,
  Button,
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
import { Edit } from "@mui/icons-material";
import ProfileDialog from "./ProfileDialog";
import { faker } from "@faker-js/faker";

function DrawerUsers() {
  const [open, setOpen] = useState(false);
  const [userDataName, setUserDataName] = useState("");
  const [userDataEmail, setUserDataEmail] = useState("");
  const [userDataFirstName, setUserDataFirstName] = useState("");
  const [userDataLastEmail, setUserDataLastEmail] = useState("");
  const [userDataAge, setUserDataAge] = useState("");
  const [userDataGender, setUserDataGender] = useState("");
  const [userDataCountry, setUserDataCountry] = useState("");
  const theme = useTheme();
  const [openProfile, setOpenProfile] = useState(false);
  
  const handleOpen = () => {
    setOpenProfile(true);
  };

  const handleClose = () => {
    setOpenProfile(false);
  };

  useEffect(() => {
    api
      .get("http://127.0.0.1:8000/api/user/data/")
      .then((response) => {
        const userData = response.data;
        setUserDataName(userData.username);
        setUserDataEmail(userData.email);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("http://127.0.0.1:8000/api/profile/data/")
      .then((response) => {
        const userData = response.data;
        setUserDataFirstName(userData.first_name);
        setUserDataLastEmail(userData.last_name);
        setUserDataAge(userData.age);
        setUserDataGender(userData.gender);
        setUserDataCountry(userData.country);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [handleClose]);

  return (
    <Stack>
      <Stack
        onClick={() => setOpen(true)}
        direction={"row"}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <IconButton sx={{ color: theme.palette.text.main }}>
          <Avatar src={faker.image.url("avatar")} />
        </IconButton>
        <Typography sx={{ color: theme.palette.text.main }}>
          {userDataName}
        </Typography>
      </Stack>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            width: "18rem",
            padding: "2rem",
            height: "100vh",
            background: theme.palette.primary.main,
          }}
        >
          <Stack direction="row" spacing="1rem" paddingBottom="1.5rem" alignItems={'center'}>
            <Avatar src={faker.image.url("avatar")} />
            <Typography sx={{ fontWeight: "bold" }}>
              {userDataName}
            </Typography>
          </Stack>
          <Stack paddingBottom={"2.5rem"}>
            <Divider />
          </Stack>
          <Stack spacing="1rem">
            <Typography sx={{ color: theme.palette.text.main }}>
              Name: {userDataFirstName} {userDataLastEmail}
            </Typography>
            <Typography sx={{ color: theme.palette.text.main }}>
              Email: {userDataEmail}
            </Typography>
            <Typography sx={{ color: theme.palette.text.main }}>
              Age: {userDataAge}
            </Typography>
            <Typography sx={{ color: theme.palette.text.main }}>
              Gender: {userDataGender}
            </Typography>
            <Typography sx={{ color: theme.palette.text.main }}>
              Country: {userDataCountry}
            </Typography>
          </Stack>
          <Divider sx={{ margin: "3rem 0" }} />
          <Stack spacing={2}>
            <Button
              startIcon={<Edit />}
              onClick={handleOpen}
              variant="contained"
              fullWidth
            >
              Edit profile
            </Button>
            <ProfileDialog open={openProfile} onClose={handleClose} name={userDataName}/>
            <LogoutDialog
              dialog={"Log out"}
              desc={"Clicking logout will end your current session."}
              username={userDataName}
            />
            <LogoutDialog
              dialog={"Delete Account"}
              desc={"Permanently remove your Account and all of its contents."}
              username={userDataName}
            />
          </Stack>
        </List>
      </Drawer>
    </Stack>
  );
}

export default DrawerUsers;

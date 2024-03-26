import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Button, Input, Stack, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import LoginIcon from "@mui/icons-material/Login";
import logsignimg from "../assets/better.jpg";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    if (name === "") {
      setNameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (!name && !password) {
      history.push("/home/upload");
    }

    e.preventDefault();
    setName("");
    setPassword("");
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            marginTop: "8rem",
            backgroundImage: `url(${logsignimg})`,
            width: "30%",
            display: "flex",
            borderRadius: "1rem",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              variant="subtitle"
              component={"h1"}
              style={{ color: "#fff", textAlign: "center", padding: "2rem" }}
            >
              Log In
            </Typography>
            <Stack spacing={"3rem"} sx={{ alignItems: "center" }}>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                required
                error={nameError}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: "1rem",
                  backgroundColor: "#fff",
                  width: "65%",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                required
                placeholder="Your Password"
                error={passwordError}
                value={password}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: "1rem",
                  backgroundColor: "#fff",
                  width: "65%",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Stack sx={{ paddingBottom: "8rem" }}>
                <Button
                  type="submit"
                  endIcon={<LoginIcon />}
                  sx={{
                    backgroundColor: "#00B9FE",
                    borderRadius: "5px",
                    color: "#333",
                    padding: "0.3rem 2rem",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Log In
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}

export default Login;

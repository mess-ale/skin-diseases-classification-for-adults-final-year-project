import React, { useState } from "react";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { Button, Input, Stack, Typography } from "@mui/material";
import HomeHeader from "./HomeHeader";
import logsignimg from "./assets/better.jpg";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
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
            width: "37%",
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
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: '1rem',
                  backgroundColor: "#fff",
                  width: "65%",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Your Password"
                value={password}
                style={{
                  color: "#000",
                  borderRadius: "0.25rem",
                  paddingLeft: '1rem',
                  backgroundColor: "#fff",
                  width: "65%",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Stack sx={{ paddingBottom: "8rem" }}>
                <Button
                  type="submit"
                  disabled={!name || !password}
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                    padding: "0.5rem 2.4rem",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <Link
                    to="/home/upload"
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {!name || !password ? "fill name and password" : "Log In"}
                  </Link>
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

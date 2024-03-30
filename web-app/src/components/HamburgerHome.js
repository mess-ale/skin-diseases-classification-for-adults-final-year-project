import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuOpen } from "@mui/icons-material";
import { Stack, Container } from "@mui/material";

const HamburgerHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = {
    backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)",
    textAlign: "center",
    padding: "0.5rem",
    color: "white",
    borderRadius: '0.5rem',
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: "bold",
  };

  return (
    <>
      <div className={isOpen ? "hamburgernav" : "hamburger"}>
        {isOpen ? (
          <MenuOpen
            style={{ padding: "15px" }}
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Menu
            style={{ padding: "15px" }}
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        {isOpen && (
          <Container
            alignItems={"center"}
            sx={{ width: "100%", paddingBottom: "1rem" }}
          >
            <Stack spacing={2}>
              <Stack>
                <Link style={linkStyle} to="/">
                  Home
                </Link>
              </Stack>

              <Stack>
                <Link style={linkStyle} to="/login">
                  Log In
                </Link>
              </Stack>

              <Stack>
                <Link style={linkStyle} to="/join">
                  Join
                </Link>
              </Stack>
            </Stack>
          </Container>
        )}
      </div>
    </>
  );
};

export default HamburgerHome;

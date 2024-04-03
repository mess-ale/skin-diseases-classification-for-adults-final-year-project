import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuOpen } from "@mui/icons-material";
import { Stack, Container } from "@mui/material";

const HamburgerHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkStyle = {
    textAlign: "center",
    padding: "0.5rem",
    color: "white",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: "bold",
  };

  const linkactivstyle = {
    borderRadius: "0.5rem",
    backgroundColor: "#7FD1AE",
  };

  const linkactivstyle1 = {
    backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)",
    borderRadius: "0.5rem",
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
              <Stack style={location.pathname === '/' ? linkactivstyle : linkactivstyle1}>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </Stack>

              <Stack style={location.pathname === '/login' ? linkactivstyle : linkactivstyle1}>
                <Link style={linkStyle} to="/login">
                  Log In
                </Link>
              </Stack>

              <Stack style={location.pathname === '/join' ? linkactivstyle : linkactivstyle1}>
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

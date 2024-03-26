import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Hamburger from "../components/Hamburger";
import { Stack } from "@mui/material";

function Preview() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack 
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {screenWidth > 700 ? <Header /> : <Hamburger />}
      <div className="previewbody"></div>
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

export default Preview;

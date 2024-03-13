import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import Hamburger from "./Hamburger";
import { Stack } from "@mui/material";

function Prediction() {
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
      <div className="precictionbody"></div>
      
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

export default Prediction;

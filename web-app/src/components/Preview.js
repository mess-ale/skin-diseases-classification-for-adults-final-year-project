import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import "./preview.css";
import Hamburger from "./Hamburger";

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
    <>
      {screenWidth > 700 ? <Header /> : <Hamburger />}
      <div className="previewbody"></div>
      <Footer />
    </>
  );
}

export default Preview;

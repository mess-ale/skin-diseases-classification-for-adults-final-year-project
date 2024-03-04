import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import './preciction.css';
import Hamburger from "./Hamburger";

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
    <>
      {screenWidth > 700 ? <Header /> : <Hamburger />}
      <div className="precictionbody"></div>
      <Footer />
    </>
  );
}

export default Prediction;

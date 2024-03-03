import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import './preview.css';

function Preview() {
  return (
    <>
      <Header />
      <div className="previewbody"></div>
      <Footer />
    </>
  );
}

export default Preview;

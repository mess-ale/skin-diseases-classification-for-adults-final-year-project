import React, { useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import "./Upload.css";
import image1 from "./assets/Gemini_Generated_Image (1).jpg";

function Upload() {
  const [imageSrc, setImageSrc] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Header />
      <div className="uploadbody">
        <div>
          <h2>
            Get insights into your health. Upload a picture and our AI
            technology will predict potential disease classifications.
          </h2>
          <div className="button">
            <label htmlFor="upload-input" className="label">
              Upload
            </label>
            <input
              type="file"
              id="upload-input"
              className="custom-input"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </div>
        </div>

        <div>
          {imageSrc ? (
            <img className="dynamicimage" src={imageSrc} alt="your sample" />
          ) : (
            <img className="dynamicimage" src={image1} alt="your sample" />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upload;
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={isOpen ? "hamburgernav" : "hamburger"}>
        {isOpen ? (
          <AiOutlineCloseCircle
            style={{ padding: "15px" }}
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <GiHamburgerMenu
            style={{ padding: "15px" }}
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        {isOpen && (
            <div className="container">
            <nav className="hambergernav2">
              <div className="hamnav">
                <Link to="/">Home</Link>
              </div>
              <div className="hamnav">
                <Link to="/home/upload">Upload</Link>
              </div>
              <div className="hamnav">
                <Link to="/home/preview">Preview</Link>
              </div>
              <div className="hamnav">
                <Link to="/home/prediction">Prediction</Link>
              </div>
            </nav></div>
        )}
      </div>
    </>
  );
};

export default Hamburger;

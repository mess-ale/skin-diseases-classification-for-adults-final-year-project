import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuOpen } from "@mui/icons-material";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

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

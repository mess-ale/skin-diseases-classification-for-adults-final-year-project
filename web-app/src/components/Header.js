import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="homenav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/home/upload">Upload</Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/home/preview">Preview</Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/home/prediction">Prediction</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

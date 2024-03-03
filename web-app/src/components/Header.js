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
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/preview">Preview</Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/prediction">Prediction</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

import React, { useRef } from "react";
import { Link } from "react-router-dom";

const LowerHeader = ({ menuClicked, setMenuClicked }) => {
  const closeButton = useRef();
  const menyStyle = menuClicked ? "polygon(0 0, 60% 0, 60% 100%, 0 100%)" : "";

  // close the menu
  const handleClose = () => {
    closeButton.current.click();
  };

  return (
    <div
      className="lower-header header-section"
      style={{ clipPath: menyStyle }}>
      {menuClicked && (
        <i
          ref={closeButton}
          className="bi bi-x-lg"
          onClick={() => setMenuClicked(!menuClicked)}></i>
      )}
      <nav>
        <ul>
          <li>
            <Link onClick={handleClose} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/authors">
              Authors
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerHeader;

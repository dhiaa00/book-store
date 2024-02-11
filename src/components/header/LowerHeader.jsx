import React from "react";

const LowerHeader = ({ menuClicked }) => {
  const menyStyle = menuClicked
    ? "polygon(0 0, 60% 0, 60% 100%, 0 100%)"
    : "polygon(0 0, 0 0, 0 100%, 0% 100%);";
  return (
    <div
      className="lower-header header-section"
      style={{ clipPath: menyStyle }}>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Authors</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerHeader;

import React from "react";

const TopHeader = ({ menuClicked, setMenuClicked }) => {
  return (
    <>
      <div className="top-header header-section">
        <i
          className="bi bi-list"
          onClick={() => {
            setMenuClicked(!menuClicked);
          }}></i>
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
          123-456-789
        </div>
        <h2>Welcome To Bookyy</h2>
        <a href="" className="login-link">
          <i className="bi bi-person-fill"></i>
          Login
        </a>
      </div>
      <hr />
    </>
  );
};

export default TopHeader;

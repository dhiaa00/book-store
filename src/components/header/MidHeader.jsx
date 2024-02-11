import React from "react";

const MidHeader = () => {
  return (
    <div className="mid-header header-section">
      <div className="logo">
        B<i className="bi bi-book"></i>kyy
      </div>
      <div className="search-box">
        <input type="search" placeholder="Search in Bookyy..." />
        <i className="bi bi-search"></i>
      </div>
      <a href="" className="cart-link">
        <i className="bi bi-cart2"></i>
      </a>
    </div>
  );
};

export default MidHeader;

import React from "react";
import { useSelector } from "react-redux";

const MidHeader = () => {
  const itemNumber = useSelector((state) => state.itemShoped.value);
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
        {itemNumber !== 0 && <div className="items">{itemNumber}</div>}
        <i className="bi bi-cart2"></i>
      </a>
    </div>
  );
};

export default MidHeader;

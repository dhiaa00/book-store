import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MidHeader = () => {
  const itemNumber = useSelector((state) => state.itemShoped.value);
  return (
    <div className="mid-header header-section">
      <Link to="./">
        <div className="logo">
          B<i className="bi bi-book"></i>kyy
        </div>
      </Link>
      <div className="search-box">
        <input type="search" placeholder="Search in Bookyy..." />
        <i className="bi bi-search"></i>
      </div>
      <Link to="./cart" className="cart-link">
        {itemNumber !== 0 && (
          <div className="items">{itemNumber <= 9 ? itemNumber : "+9"}</div>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default MidHeader;

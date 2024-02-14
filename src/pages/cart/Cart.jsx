import React from "react";
import { books } from "../../data/books";
import { useSelector } from "react-redux";

const Cart = () => {
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemList = useSelector((state) => state.itemShoped.items);
  return (
    <div className="cart-section">
      <div className="cart-items"></div>
    </div>
  );
};

export default Cart;

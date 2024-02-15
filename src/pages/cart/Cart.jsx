import React from "react";
import { books } from "../../data/books";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptyCart from "../../images/empty-cart.png";
import "./cart.css";

const Cart = () => {
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemList = useSelector((state) => state.itemShoped.items);
  const cartItemList = [];

  for (let i = 0; i < Object.keys(itemList).length; i++) {
    cartItemList.push(
      <CartItem
        key={i + 1}
        quantity={itemList[Object.keys(itemList)[i]]}
        book={books[Object.keys(itemList)[i] - 1]}
      />
    );
  }

  return (
    <div className="cart-section">
      <div className="cart-items">
        {itemNumber === 0 ? (
          <>
            <img className="empty-cart-image" src={emptyCart} alt="cart" />
            <h1>
              Your Cart is <span className="empty">Empty</span>
            </h1>
          </>
        ) : (
          cartItemList
        )}
      </div>
    </div>
  );
};

export default Cart;

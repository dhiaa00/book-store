import React, { useState } from "react";

const CartItem = ({ quantity, book }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  return (
    <div className="cart-item">
      <img src={`/books/${book.image}`} alt="book" />
      <div className="description-price">
        <div className="cart-item-description">
          <div className="cart-item-title">
            <span>Title: </span>
            {book.title}
          </div>
          <div className="cart-item-author">
            <span>Author: </span>
            {book.author}
          </div>
        </div>
        <div className="cart-item-price">
          <div className="item-quantity">
            <button
              className="price-button plus"
              onClick={() => setItemQuantity(itemQuantity + 1)}>
              +
            </button>
            {itemQuantity}
            {itemQuantity === 1 ? (
              <button disabled className="price-button minus">
                -
              </button>
            ) : (
              <button
                className="price-button minus"
                onClick={() => setItemQuantity(itemQuantity - 1)}>
                -
              </button>
            )}
          </div>
          <div className="item-price">${book.price * itemQuantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

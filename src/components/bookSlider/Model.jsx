import React from "react";
import Rating from "./Rating";

const Model = ({ book }) => {
  return (
    <div className="model-container">
      <div className="model-content">
        <img src="" alt="" />
        <div className="model-infos">
          <h2>{book.title}</h2>
          <div className="model-info">
            <span>Status: </span>
            {book.status}
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="model-info">
            <span>Author: </span>
            {book.author}
          </div>
          <div className="model-info">
            <span>Price: </span>
            {book.price}
          </div>
          <div className="model-info">
            <input type="number" value={1} />
            <button className="add-to-cart-button">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <button className="see-more-button">See More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Model;

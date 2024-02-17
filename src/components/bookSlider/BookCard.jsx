import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding } from "../../features/itemSlice";
import Model from "./Model";
import Rating from "./Rating";

const BookCard = ({ leftClicked, setRightDisappear, last, book }) => {
  const [showDetails, setShowDetails] = useState(false);

  // redux toolkit items state
  const dispatch = useDispatch();
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemsList = useSelector((state) => state.itemShoped.items);

  const handleAddToCart = () => {
    dispatch(adding(book.id));
  };

  const lastBook = last ? useRef() : null;
  if (last && lastBook.current) {
    const elem = lastBook.current.getBoundingClientRect();
    if (!leftClicked && elem.x <= window.innerWidth) {
      setRightDisappear(true);
    }
  }

  return (
    <>
      <div ref={lastBook} className="book-card">
        <img src={`/books/${book.image}`} alt="book" />
        <div className="info">
          <div className="book-info">
            <h3> {book.title} </h3>
            <div className="price-rating">
              <Rating rating={book.rating} reviews={book.reviews} />
              <div className="price"> ${book.price} </div>
            </div>
          </div>
          <div className="card-footer">
            <i className="bi bi-eye-fill"></i>
            <i className="bi bi-cart-plus" onClick={handleAddToCart}></i>
          </div>
        </div>
      </div>
      {showDetails && <Model book={book} />}
    </>
  );
};

export default BookCard;

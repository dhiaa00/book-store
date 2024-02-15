import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding } from "../../features/itemSlice";

const BookCard = ({ leftClicked, setRightDisappear, last, book }) => {
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

  // generate stars
  const stars = (rating) => {
    const starlist = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starlist.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i - 0.5 === rating) {
        starlist.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        starlist.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return starlist;
  };

  return (
    <div ref={lastBook} className="book-card">
      <img src={`/books/${book.image}`} alt="book" />
      <div className="info">
        <div className="book-info">
          <h3> {book.title} </h3>
          <div className="price-rating">
            <div className="review">
              {stars(book.rating)}
              {book.rating} ({book.reviews} reviews){" "}
            </div>
            <div className="price"> ${book.price} </div>
          </div>
        </div>
        <div className="card-footer">
          <i className="bi bi-eye-fill"></i>
          <i className="bi bi-cart-plus" onClick={handleAddToCart}></i>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

import { useRef } from "react";
import BookCard from "./BookCard";
import "./BookSlider.css";
import { useState } from "react";

const BookSlider = ({ title, booksList }) => {
  const [swipesNumber, setSwipeNumber] = useState(0);
  const bookSlider = useRef();
  const handleRight = () => {};
  const handleLeft = () => {};

  return (
    <div className="book-slider">
      <i className="bi bi-chevron-right" onClick={handleRight}></i>
      <h2>{title}</h2>
      <div className="book-slider-container">
        {booksList.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <i className="bi bi-chevron-left" onClick={handleLeft}></i>
    </div>
  );
};

export default BookSlider;

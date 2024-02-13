import { useRef } from "react";
import BookCard from "./BookCard";
import "./BookSlider.css";
import { useState } from "react";

const BookSlider = ({ title, booksList }) => {
  const [swipesNumber, setSwipeNumber] = useState(0);
  const [rightDisappear, setRightDisappear] = useState(false);
  const [leftClicked, setLeftClicked] = useState(false);
  const bookSlider = useRef();
  const booknumber = booksList.length;

  const handleRight = () => {
    bookSlider.current.style.transform = `translateX(-${
      (swipesNumber + 1) * 70
    }vw)`;
    setSwipeNumber(swipesNumber + 1);
    setLeftClicked(false);
  };
  const handleLeft = () => {
    bookSlider.current.style.transform = `translateX(-${
      (swipesNumber - 1) * 70
    }vw)`;
    setSwipeNumber(swipesNumber - 1);
    setLeftClicked(true);
    setRightDisappear(false);
  };

  return (
    <div className="book-slider">
      {swipesNumber !== 0 && (
        <i className="bi bi-chevron-left" onClick={handleLeft}></i>
      )}
      {!rightDisappear && (
        <i className="bi bi-chevron-right" onClick={handleRight}></i>
      )}
      <h2>{title}</h2>
      <div className="book-slider-container" ref={bookSlider}>
        {booksList.map((book, index) =>
          index === booknumber - 1 ? (
            <BookCard
              leftClicked={leftClicked}
              setRightDisappear={setRightDisappear}
              last={true}
              key={book.id}
              book={book}
            />
          ) : (
            <BookCard last={false} key={book.id} book={book} />
          )
        )}
      </div>
    </div>
  );
};

export default BookSlider;

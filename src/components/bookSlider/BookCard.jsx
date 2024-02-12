const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={`/books/${book.image}`} alt="book" />
      <div className="info">
        <div className="book-info">
          <h3> {book.title} </h3>
          <div className="price-rating">
            <div className="review">
              {" "}
              {book.rating} ({book.reviews} reviews){" "}
            </div>
            <div className="price"> ${book.price} </div>
          </div>
        </div>
        <div className="card-footer">
          <i className="bi bi-eye-fill"></i>
          <i className="bi bi-cart-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

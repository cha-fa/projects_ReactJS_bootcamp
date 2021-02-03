import React from "react";
import Favorite from "components/Favorite";
import Wish from "components/Wish";

const Book = (props) => {
  const { book } = props;

  return (
    <div className="col-sm-12 col-md-4 p-2 card mb-2">
      <img className="card-img-top" src={book.thumbnailUrl} alt="Book cover" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.shortDescription}</p>
        <Favorite book={book} />
        <Wish book={book} />
      </div>
    </div>
  );
};

export default Book;

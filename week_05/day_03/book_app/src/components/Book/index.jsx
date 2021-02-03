import React from "react";

const Book = (props) => {
  const { title, shortDescription, thumbnailUrl } = props.data;

  return (
    <div className="col-sm-12 col-md-4 p-2 card mb-2">
      <img className="card-img-top" src={thumbnailUrl} alt="Book cover" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{shortDescription}</p>
      </div>
    </div>
  );
};

export default Book;

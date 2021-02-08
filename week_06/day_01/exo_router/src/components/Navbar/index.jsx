import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import books from "../../data/books";

const Navbar = () => {
  const bookList = books.map((book) => (
    <li key={book.slug}>
      <Link to={"/" + book.slug}>{book.title}</Link>
    </li>
  ));
  console.log("in nav");

  return (
    <nav>
      <ul>{bookList}</ul>
    </nav>
  );
};

export default Navbar;

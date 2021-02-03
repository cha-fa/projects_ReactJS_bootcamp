import React from "react";
import ReactDOM from "react-dom";
import Books from "components/Books";
import { Container } from "react-bootstrap";
import data from "./data.json";

import "bootstrap/dist/css/bootstrap.min.css";

const allBooks = data.books[0];

const App = () => (
  <Container>
    <p>Hello</p>
    <p>Title of first book is {allBooks[0].title}</p>
    <Books />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));

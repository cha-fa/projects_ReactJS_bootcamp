import React from "react";
import ReactDOM from "react-dom";
import Books from "components/Books";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Container>
    <h3>Search for a book</h3>
    <Books />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));

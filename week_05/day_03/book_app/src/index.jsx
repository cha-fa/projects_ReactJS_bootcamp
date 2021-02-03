import React from "react";
import ReactDOM from "react-dom";
import Books from "components/Books";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Container>
    <p>Hello</p>
    <Books />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));

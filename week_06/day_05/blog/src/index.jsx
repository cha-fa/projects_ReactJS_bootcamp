import React from "react";
import ReactDOM from "react-dom";
import Fetch from "./Fetch";
const App = () => (
  <container>
    <p>Hello</p>
    <Fetch />
  </container>
);

ReactDOM.render(<App />, document.getElementById("root"));

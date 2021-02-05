import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Contact from "./components/Contact";

const App = () => (
  <div>
    <Contact />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

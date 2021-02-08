import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/:bookSlug" component={Book} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

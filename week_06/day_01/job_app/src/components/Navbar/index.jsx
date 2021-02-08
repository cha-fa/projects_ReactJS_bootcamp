import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const Navbar = ({ handleSearchInput }) => {
  return (
    <nav>
      <p>Rechercher</p>
      <input
        onChange={(event) => handleSearchInput(event.target.value)}
        type="text"
      ></input>
      <Link to={"/"}>Nouvelle recherche</Link>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = ({ handleSearchInput }) => {
  return (
    <nav>
      <p>Rechercher</p>
      <input
        onChange={(event) => handleSearchInput(event.target.value)}
        type="text"
      ></input>
    </nav>
  );
};

export default Navbar;

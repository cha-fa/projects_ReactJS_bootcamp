import React from "react";

const SearchForm = ({ sendInput, sendFav, sendWish }) => {
  const handleChangeInput = (event) => {
    const { value } = event.target;
    sendInput(value.toLowerCase());
  };

  const handleChangeFav = (event) => {
    const { checked } = event.target;
    sendFav(checked);
  };

  const handleChangeWish = (event) => {
    const { checked } = event.target;
    sendWish(checked);
  };

  return (
    <form className="SearchFrom">
      <input onChange={handleChangeInput} type="text" id="search" />
      <br />
      <label htmlFor="fav">
        <input onChange={handleChangeFav} type="checkbox" id="fav" name="fav" />
        Voir mes favoris
      </label>

      <label htmlFor="wish">
        <input
          onChange={handleChangeWish}
          type="checkbox"
          id="wish"
          name="wish"
        />
        Voir ma liste de souhait
      </label>
    </form>
  );
};

export default SearchForm;

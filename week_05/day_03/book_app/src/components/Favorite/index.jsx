import React from "react";
import data from "data.json";

const Favorite = ({ book }) => {
  const allBooks = data.books[0];
  const [isFavorite, setIsFav] = React.useState(book.isFav);

  const handleClick = () => {
    setIsFav(!isFavorite);
  };

  React.useEffect(() => {
    allBooks[allBooks.indexOf(book)].isFav = isFavorite;
  }, [isFavorite]);

  return (
    <div id="Favorite">
      <button type="button" onClick={handleClick}>
        {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </div>
  );
};

export default Favorite;

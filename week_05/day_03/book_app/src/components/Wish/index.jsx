import React from "react";
import data from "data.json";

const Wish = ({ book }) => {
  const allBooks = data.books[0];
  const [isWished, setIsWished] = React.useState(book.read);

  const handleClick = () => {
    setIsWished(!isWished);
  };

  React.useEffect(() => {
    allBooks[allBooks.indexOf(book)].read = isWished;
  }, [isWished]);

  return (
    <div id="Favorite">
      <button type="button" onClick={handleClick}>
        {isWished
          ? "Retirer de la liste de souhaits"
          : "Ajouter à la liste de souhaits"}
      </button>
    </div>
  );
};

export default Wish;

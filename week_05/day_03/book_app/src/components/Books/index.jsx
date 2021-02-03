import React from "react";
import data from "data.json";
import { Container, Row } from "react-bootstrap";
import Book from "components/Book";
import SearchForm from "components/SearchForm";

const Books = () => {
  const allBooks = data.books[0];
  const [userKeyword, setUserKeyword] = React.useState(null);
  const [favoriteFilter, setFavoriteFilter] = React.useState(false);
  const [wishFilter, setWishFilter] = React.useState(false);
  const [currentResults, setCurrentResults] = React.useState(allBooks);

  const getKeyword = (formData) => {
    setUserKeyword(formData);
  };

  const getWish = (formData) => {
    setWishFilter(formData);
  };
  const getFavorite = (formData) => {
    setFavoriteFilter(formData);
  };

  const filterSearch = () => {
    const filteredBooks = allBooks.filter((b) =>
      b.title.toLowerCase().includes(userKeyword)
    );
    setCurrentResults(filteredBooks);
  };

  const filterFavorite = () => {
    setCurrentResults(currentResults.filter((b) => b.isFav));
  };

  const filterWish = () => {
    setCurrentResults(currentResults.filter((b) => b.read));
  };

  const filterResults = () => {
    if (userKeyword && !favoriteFilter && !wishFilter) {
      filterSearch();
    } else if (userKeyword && favoriteFilter && !wishFilter) {
      filterSearch();
      filterFavorite();
    } else if (!userKeyword && favoriteFilter && wishFilter) {
      filterFavorite();
      filterWish();
    } else if (userKeyword && !favoriteFilter && wishFilter) {
      filterSearch();
      filterWish();
    } else if (!userKeyword && !favoriteFilter && wishFilter) {
      filterWish();
    } else if (!userKeyword && favoriteFilter && !wishFilter) {
      filterFavorite();
    } else if (userKeyword && favoriteFilter && wishFilter) {
      filterSearch();
      filterWish();
      filterFavorite();
    } else {
      setCurrentResults(allBooks);
    }
  };

  React.useEffect(() => {
    filterResults();
  }, [userKeyword, favoriteFilter, wishFilter]);

  return (
    <Container className="Books">
      <Row>
        <p>
          check states fav {favoriteFilter ? "true" : "false"} wish {wishFilter}{" "}
          input {userKeyword}
        </p>
        <SearchForm
          sendInput={getKeyword}
          sendFav={getFavorite}
          sendWish={getWish}
        />
        <p>Il y a {currentResults.length} résultats</p>
      </Row>
      <Row>
        {currentResults.map((bookData) => (
          <Book book={bookData} key={bookData.isbn} />
        ))}
      </Row>
    </Container>
  );
};

export default Books;

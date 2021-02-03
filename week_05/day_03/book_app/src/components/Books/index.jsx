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

  const filterResults = () => {
    setCurrentResults(allBooks);
    if (userKeyword && favoriteFilter && wishFilter) {
      const filteredBooks = allBooks.filter(
        (b) => b.title.toLowerCase().includes(userKeyword) && b.isFav && b.read
      );
      setCurrentResults(filteredBooks);
    } else if (userKeyword && !favoriteFilter && !wishFilter) {
      const filteredBooks = allBooks.filter((b) =>
        b.title.toLowerCase().includes(userKeyword)
      );
      setCurrentResults(filteredBooks);
    } else if (!userKeyword && favoriteFilter && !wishFilter) {
      const filteredBooks = allBooks.filter((b) => b.isFav);
      setCurrentResults(filteredBooks);
    } else if (!userKeyword && !favoriteFilter && wishFilter) {
      const filteredBooks = allBooks.filter((b) => b.read);
      setCurrentResults(filteredBooks);
    } else if (userKeyword && favoriteFilter && !wishFilter) {
      const filteredBooks = allBooks.filter(
        (b) => b.title.toLowerCase().includes(userKeyword) && b.isFav
      );
      setCurrentResults(filteredBooks);
    } else if (!userKeyword && favoriteFilter && wishFilter) {
      const filteredBooks = allBooks.filter((b) => b.isFav && b.read);
      setCurrentResults(filteredBooks);
    } else if (userKeyword && !favoriteFilter && wishFilter) {
      const filteredBooks = allBooks.filter(
        (b) => b.title.toLowerCase().includes(userKeyword) && b.read
      );
      setCurrentResults(filteredBooks);
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

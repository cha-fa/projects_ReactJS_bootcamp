import React from "react";
import data from "data.json";
import { Container, Row } from "react-bootstrap";
import Book from "components/Book";

const Books = () => {
  const allBooks = data.books[0];

  return (
    <Container>
      <Row>
        {allBooks.map((bookData) => (
          <Book data={bookData} key={bookData.isbn} />
        ))}
      </Row>
    </Container>
  );
};

export default Books;

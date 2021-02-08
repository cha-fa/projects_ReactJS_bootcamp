import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import books from "../../data/books";

const Book = () => {
  console.log("were in book");
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined);

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug]);

  return <h1>{currentBook ? currentBook.title : "Pas de livre"}</h1>;
};

export default Book;

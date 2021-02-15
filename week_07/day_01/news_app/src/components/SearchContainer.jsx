import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFetchUrl,
  fetchNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../redux";
import API_KEY from "../config";

const SearchContainer = () => {
  const [currentSources, setCurrentSources] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector((state) => state);
  console.log(search);
  const inputEl = useRef();

  const handleClick = () => {
    if (inputEl.current.value.length > 0) {
      dispatch(setFetchUrl(`q=${inputEl.current.value}`));
    }
  };

  const handleChange = (event) => {
    const source = event.target.value;
    dispatch(setFetchUrl(`sources=${source}`));
  };
  const fetchSources = () => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        let newSources = [];
        response.sources.map((source) => {
          newSources = [...newSources, { id: source.id, name: source.name }];
        });
        setCurrentSources(newSources);
      });
  };

  const fetchNews = (url) => {
    console.log("running fetch");
    dispatch(fetchNewsRequest());
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchNewsError(response.message));
        } else {
          dispatch(fetchNewsSuccess(response.articles));
        }
      });
  };
  useEffect(() => {
    fetchSources();
  }, []);

  useEffect(() => {
    dispatch(fetchNewsSuccess([]));
    fetchNews(search.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.url]);

  return (
    <div className="SearchContainer">
      <input type="text" ref={inputEl}></input>
      <button type="button" onClick={handleClick}>
        Search
      </button>

      <select name="pets" id="pet-select" onChange={handleChange}>
        {currentSources &&
          currentSources.map((source) => (
            <option value={source.id} key={source.id}>
              {source.name}
            </option>
          ))}
      </select>
      <p>{search.loading && "Recherche en cours..."}</p>
      <ul>
        {search.news &&
          search.news.map((article) => (
            <li key={article.publishedAt}>{article.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchContainer;

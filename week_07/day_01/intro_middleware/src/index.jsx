import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const App = () => {
  const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
  const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
  const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

  const initialState = {
    loading: false,
    news: [],
    error: "",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          news: action.news,
        };
      case FETCH_NEWS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  const fetchNewsRequest = () => {
    return {
      type: FETCH_NEWS_REQUEST,
    };
  };

  const fetchNewsSuccess = (news) => {
    return {
      type: FETCH_NEWS_SUCCESS,
      news,
    };
  };

  const fetchNewsError = (error) => {
    return {
      type: FETCH_NEWS_ERROR,
      error,
    };
  };

  const fetchNews = () => {
    return (dispatch) => {
      dispatch(fetchNewsRequest());
      fetch(
        "http://newsapi.org/v2/everything?q=reactjs&sortBy=publishedAt&apiKey=API_KEY"
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "error") {
            dispatch(fetchNewsError(response.message));
          } else {
            dispatch(fetchNewsSuccess(response.articles));
          }
        });
    };
  };

  store.subscribe(() => console.log(store.getState()));
  store.dispatch(fetchNews());

  return (
    <container>
      <p>Hello</p>
    </container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

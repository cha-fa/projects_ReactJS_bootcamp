import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_REQUEST,
  SET_FETCH_URL,
} from "./newsTypes";

import API_KEY from "../../config";

const initialState = {
  loading: false,
  news: [],
  error: "",
  url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCH_URL:
      return {
        ...state,
        url: `https://newsapi.org/v2/top-headlines?${action.filter}&apiKey=${API_KEY}`,
      };
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

export default newsReducer;

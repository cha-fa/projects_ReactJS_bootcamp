import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_REQUEST,
  SET_FETCH_URL,
} from "./newsTypes";

export const setFetchUrl = (filter) => {
  return {
    type: SET_FETCH_URL,
    filter,
  };
};

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    news,
  };
};

export const fetchNewsError = (error) => {
  return {
    type: FETCH_NEWS_ERROR,
    error,
  };
};

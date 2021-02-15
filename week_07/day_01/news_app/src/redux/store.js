import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./news/newsReducer";

const store = createStore(
  newsReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

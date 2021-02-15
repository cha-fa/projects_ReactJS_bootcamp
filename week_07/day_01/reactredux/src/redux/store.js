import { createStore, combineReducers } from "redux";
import pastasReducer from "./pastas/pastasReducer";
import riceReducer from "./rice/riceReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer,
  todo: todoReducer,
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

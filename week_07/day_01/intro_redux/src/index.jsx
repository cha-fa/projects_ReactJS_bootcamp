import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

const App = () => {
  const BUY_PASTAS = "BUY_PASTAS";
  const EAT_PASTAS = "EAT_PASTAS";
  const BUY_RICE = "BUY_RICE";
  const EAT_RICE = "EAT_RICE";

  const initialStatePastas = {
    pastas: 4,
  };

  const initialStateRice = {
    rice: 8,
  };

  const pastaReducer = (state = initialStatePastas, action) => {
    switch (action.type) {
      case BUY_PASTAS:
        return {
          ...state,
          pastas: state.pastas + action.weight,
        };
      case EAT_PASTAS:
        return {
          ...state,
          pastas: state.pastas - action.weight,
        };
      default:
        return state;
    }
  };
  const riceReducer = (state = initialStateRice, action) => {
    switch (action.type) {
      case BUY_RICE:
        return {
          ...state,
          rice: state.rice + action.weight,
        };
      case EAT_RICE:
        return {
          ...state,
          rice: state.rice - action.weight,
        };
      default:
        return state;
    }
  };
  const rootReducer = combineReducers({
    pastas: pastaReducer,
    rice: riceReducer,
  });

  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const buyPastas = (weight) => {
    return {
      type: BUY_PASTAS,
      weight,
    };
  };
  const eatPastas = (weight) => {
    return {
      type: EAT_PASTAS,
      weight,
    };
  };

  const buyRice = (weight) => {
    return {
      type: BUY_RICE,
      weight,
    };
  };
  const eatRice = (weight) => {
    return {
      type: EAT_RICE,
      weight,
    };
  };
  store.subscribe(() => console.log(store.getState()));

  store.dispatch(eatPastas(3));
  store.dispatch(buyPastas(2));
  store.dispatch(buyRice(2));
  store.dispatch(buyPastas(2));
  store.dispatch(buyRice(1));
  store.dispatch(eatRice(2));
  store.dispatch(eatPastas(1));

  return (
    <container>
      <p>Hello</p>
    </container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

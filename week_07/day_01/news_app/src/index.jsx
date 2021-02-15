import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchContainer from "./components/SearchContainer";

const App = () => (
  <container>
    <Provider store={store}>
      <div className="app">
        <SearchContainer />
      </div>
    </Provider>
  </container>
);

ReactDOM.render(<App />, document.getElementById("root"));

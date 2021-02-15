import React from "react";
import ReactDOM from "react-dom";
import PastaContainer from "./components/PastaContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import PastasContainerWithHook from "./components/PastasContainerWithHook";
import RiceContainerWithHook from "./components/RiceContainerWithHook";
const App = () => (
  <container>
    <Provider store={store}>
      <div className="app">
        <PastasContainerWithHook />
        <RiceContainerWithHook />
      </div>
    </Provider>
  </container>
);

ReactDOM.render(<App />, document.getElementById("root"));

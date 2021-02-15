import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PastasContainerWithHook from "./components/PastasContainerWithHook";
import RiceContainerWithHook from "./components/RiceContainerWithHook";
import TodoContainer from "./components/TodoContainer";
const App = () => (
  <container>
    <Provider store={store}>
      <div className="app">
        <PastasContainerWithHook />
        <RiceContainerWithHook />
        <TodoContainer />
      </div>
    </Provider>
  </container>
);

ReactDOM.render(<App />, document.getElementById("root"));

import { useState } from "react";
import ReactDOM from "react-dom";
import CounterContext from "context/CounterContext";
import Buttons from "components/Buttons";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        currentNumber, // Ici on utilise le « short property assignment » ;)
        increment: () => setCurrentNumber(currentNumber + 1),
        decrement: () => setCurrentNumber(currentNumber - 1),
      }}
    >
      <Buttons />
    </CounterContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

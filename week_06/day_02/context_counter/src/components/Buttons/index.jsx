import { useContext } from "react";
import CounterContext from "context/CounterContext";

const CountButtons = () => {
  const counter = useContext(CounterContext);
  console.log("counter is", counter.currentNumber);
  return (
    <div className="CountButtons">
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </div>
  );
};

export default CountButtons;

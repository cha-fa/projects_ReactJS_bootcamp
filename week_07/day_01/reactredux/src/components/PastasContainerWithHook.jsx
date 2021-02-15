import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPastas, eatPastas } from "../redux";
const PastasContainerWithHook = () => {
  const pastas = useSelector((state) => state.pastas);
  const dispatch = useDispatch();

  return (
    <div className="PastasContainerWithHook">
      {" "}
      <h2>Number of pasta kgs :{pastas.pastas}</h2>
      <button type="button" onClick={() => dispatch(buyPastas())}>
        Buy pastas
      </button>
      <button type="button" onClick={() => dispatch(eatPastas())}>
        Eat pastas
      </button>
    </div>
  );
};

export default PastasContainerWithHook;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyRice, eatRice } from "../redux";

const RiceContainer = () => {
  const rice = useSelector((state) => state.rice);
  const dispatch = useDispatch();

  return (
    <div className="RiceContainerWithHook">
      {" "}
      <h2>Number of RICE kgs :{rice.rice}</h2>
      <button type="button" onClick={() => dispatch(buyRice())}>
        Buy Rice
      </button>
      <button type="button" onClick={() => dispatch(eatRice())}>
        Eat Rice
      </button>
    </div>
  );
};

export default RiceContainer;

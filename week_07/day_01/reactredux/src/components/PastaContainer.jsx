import React from "react";
import { buyPastas } from "../redux";
import { connect } from "react-redux";

const PastaContainer = (props) => {
  return (
    <div className="PastaContainer">
      <h2>Number of pasta kgs :{props.pastas}</h2>
      <button type="button" onClick={props.buyPastas}>
        Buy pastasn
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pastas: state.pastas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPastas: () => dispatch(buyPastas()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastaContainer);

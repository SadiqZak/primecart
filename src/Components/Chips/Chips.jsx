import React, { useContext, useEffect } from "react";
// import { CardContext } from "../../utils/card-context";

const Chips = () => {
  // const { state, dispatch } = useContext(CardContext);

  return (
    <div className="chips-container">
      <div
        // onClick={() => {
        //   dispatch({ type: "All" });
        // }}
        // ${state.catSelect==="All" && "selected"}
        className={`chips `}
      >
        All
      </div>
      <div
        // onClick={() => {
        //   dispatch({ type: "Shoes" });
        // }}
        // ${state.catSelect==="Shoes" && "selected"}
        className={`chips `}
      >
        Shoes
      </div>
      <div
        // onClick={() => {
        //   dispatch({ type: "Laces" });
        // }}
        // ${state.catSelect==="Laces" && "selected"}
        className={`chips `}
      >
        Laces
      </div>
    </div>
  );
};

export default Chips;

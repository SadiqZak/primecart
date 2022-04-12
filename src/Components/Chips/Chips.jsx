import React, { useContext, useEffect } from "react";
import { CardContext } from "../../Backend/utils/card-context";

const Chips = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <div className="chips-container">
      <div
        onClick={() => {
          dispatch({ type: "All" });
        }}
        className={`chips ${state.chipsCategory==="All" && "selected"} `}
      >
        All
      </div>
      <div
        onClick={() => {
          dispatch({ type: "shoes" });
        }}
        className={`chips ${state.chipsCategory==="shoes" && "selected"} `}
      >
        Shoes
      </div>
      <div
        onClick={() => {
          dispatch({ type: "laces" });
        }}
        className={`chips ${state.chipsCategory==="laces" && "selected"} `}
      >
        Laces
      </div>
    </div>
  );
};

export default Chips;

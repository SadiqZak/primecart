import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardContext } from "../../../../context/card-context";

const SidebarChild = () => {
  const { state, dispatch } = useContext(CardContext);
  const [currentRange, setCurrentRange] = useState("3000");

  useEffect(() => {
    dispatch({ type: "PriceRange", payload: currentRange });
  }, [currentRange]);

  return (
    <>
      <div className="sidebar-child">
        <div className="sidebar-child-wrapper">
          <div className="wd-100 flex-jc-sb">
            <div>
              <small>Price:</small>
            </div>
          </div>

          <div className="action-container">
            {/* <div className="label-containers"><label>₹800</label><label>₹1500</label><label>₹3000</label></div> */}
            <div className="label-containers">
              <option value="800">800</option>
              <option value="1500">1500</option>
              <option value="3000">3000</option>
            </div>

            <input
              className="price-range-filter"
              type="range"
              min="800"
              value={currentRange}
              max="3000"
              onChange={(e) => {
                dispatch({ type: "PriceRange", payload: e.target.value });
                setCurrentRange(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="sidebar-child-wrapper">
          <div className="wd-100 flex-jc-sb">
            <div>
              <small>Sort by:</small>
            </div>
            <div>
              <small
                className="clear-sidebar"
                onClick={() =>dispatch({ type: "ClearPrice" })}
              >
                Clear
              </small>
            </div>
          </div>

          <div className="action-container-radio"  onClick={() => dispatch({ type: "HighToLow" })} >
            <input
              checked={state.priceFilter === "HighToLow"}
              type="radio"
            />
            Price high to low
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "LowToHigh" })}>
            <input
              checked={state.priceFilter === "LowToHigh"}
              type="radio"
            />
            Price low to high
          </div>
        </div>
        <div className="sidebar-child-wrapper">
          <div className="wd-100 flex-jc-sb">
            <div>
              <small>Categories:</small>
            </div>
            <div>
              <small
                className="clear-sidebar"
                onClick={() => {dispatch({ type: "ClearCategorySex" }); dispatch({type:"All"})}}
              >
                Clear
              </small>
            </div>
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "Boys" })}>
            <input
              checked={state.categoryFilter === "Boys"}
              type="radio"
            />
            Boys
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "Girls" })}>
            <input
              checked={state.categoryFilter === "Girls"}
              type="radio"
            />
            Girls
          </div>
        </div>
        <div className="sidebar-child-wrapper">
          <div className="wd-100 flex-jc-sb">
            <div>
              <small>Ratings:</small>
            </div>
            <div>
              <small
                className="clear-sidebar"
                onClick={() => dispatch({ type: "ClearRatings" })}
              >
                Clear
              </small>
            </div>
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "4above" })}>
            <input
              checked={state.currRatingState === "4above"}
              type="radio"
            />
            4 stars & above
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "3above" })}>
            <input
              checked={state.currRatingState === "3above"}
              type="radio"
            />
            3 stars & above
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "2above" })}>
            <input
              checked={state.currRatingState === "2above"}
              type="radio"
            />
            2 stars & above
          </div>
          <div className="action-container-radio" onClick={() => dispatch({ type: "1above" })}>
            <input
              checked={state.currRatingState === "1above"}
              type="radio"
            />
            1 star & above
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarChild;

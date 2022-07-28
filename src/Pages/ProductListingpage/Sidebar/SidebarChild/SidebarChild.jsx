import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardContext } from "../../../../context/card-context";

const SidebarChild = () => {
  const { state, dispatch } = useContext(CardContext);
  const [currentRange, setCurrentRange] = useState('2000')

  useEffect(()=>{
    dispatch({ type: "PriceRange", payload:currentRange })
  },[currentRange])
  
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
              min='800'
              value={currentRange}
              max="3000"
              onChange={(e) => {dispatch({ type: "PriceRange", payload:e.target.value }); setCurrentRange(e.target.value)}}
            />
          </div>
        </div>
        <div className="sidebar-child-wrapper">
          <div className="wd-100 flex-jc-sb">
            <div>
              <small>Sort by:</small>
            </div>
            <div>
              <small className="clear-sidebar" onClick={()=>dispatch({type:"ClearPrice"})}>Clear</small>
            </div>
          </div>

          <div className="action-container">
            <input
              checked={state.priceFilter === "HighToLow"}
              type="radio"
              onChange={() => dispatch({ type: "HighToLow" })}
            />
            Price high to low
          </div>
          <div className="action-container">
            <input
              checked={state.priceFilter === "LowToHigh"}
              type="radio"
              onChange={() => dispatch({ type: "LowToHigh" })}
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
            <small className="clear-sidebar" onClick={()=>dispatch({type:"ClearCategorySex"})}>Clear</small>
            </div>
          </div>
          <div className="action-container"><input
              checked={state.categoryFilter === "Boys"}
              type="radio"
              onChange={() => dispatch({ type: "Boys" })}
            />Boys</div>
          <div className="action-container"><input
              checked={state.categoryFilter === "Girls"}
              type="radio"
              onChange={() => dispatch({ type: "Girls" })}
            />Girls</div>
        </div>
        <div className="sidebar-child-wrapper">
        <div className="wd-100 flex-jc-sb">
            <div>
              <small>Ratings:</small>
            </div>
            <div>
            <small className="clear-sidebar" onClick={()=>dispatch({type:"ClearRatings"})}>Clear</small>
            </div>
          </div>
          <div className="action-container"><input
              checked={state.currRatingState === "4above"}
              type="radio"
              onChange={() => dispatch({ type: "4above" })}
            />4 stars & above</div>
          <div className="action-container"><input
              checked={state.currRatingState === "3above"}
              type="radio"
              onChange={() => dispatch({ type: "3above" })}
            />3 stars & above</div>
          <div className="action-container"><input
              checked={state.currRatingState === "2above"}
              type="radio"
              onChange={() => dispatch({ type: "2above" })}
            />2 stars & above</div>
          <div className="action-container"><input
              checked={state.currRatingState === "1above"}
              type="radio"
              onChange={() => dispatch({ type: "1above" })}
            />1 star & above</div>
        </div>
      </div>
    </>
  );
};

export default SidebarChild;

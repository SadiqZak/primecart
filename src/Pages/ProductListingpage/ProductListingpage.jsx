import React, { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import data from "../../Backend/db/data";
import Chips from "../../Components/Chips/Chips";
import { CardContext } from "../../Backend/utils/card-context";
import { Link } from "react-router-dom";

const ProductListingpage = () => {
  const { filteredData, dispatch, state } = useContext(CardContext);
  return (
    <div className="productlist-container">
      <Sidebar />
      <div>
        <Chips />
        <div className="recommended-videos">
          {filteredData.map(({ id, title, img, price, rating }) => (
            <div key={id} className="card-products">
              <div className="card-products-wrapper">
                <img className="card-thumbnail" src={img} alt="product" />
                <div className="card-footer">
                  <div className="card-title">{title}</div>
                </div>
              </div>
              <div className="card-footer-details">
                <div className="card-rating">{`★${rating}`}</div>
                <div>{`₹ ${price}`}</div>
                <span className="card-icon material-icons">
                  favorite_border
                </span>
              </div>
              {!state.productList.find((item) => item.id === id).cartedState
                .addedCart && (
                <button
                  onClick={() =>
                    dispatch({
                      type: "AddToCart",
                      payload: { id, title, price, rating, img },
                    })
                  }
                  className="card-btn"
                >
                  Add to Cart
                </button>
              )}
              {state.productList.find((item) => item.id === id).cartedState
                .addedCart && <Link className="link-tag" to="/cartmanagement"><button className="card-btn-go">Go to Cart</button></Link>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingpage;

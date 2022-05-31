import React, { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chips from "../../Components/Chips/Chips";
import { CardContext } from "../../backend/utils/card-context";
import { Link} from "react-router-dom";
// import ReactLoading from 'react-loading';

const ProductListingpage = () => {
  const { filteredData, dispatch, state, isLoading } = useContext(CardContext);

  return (
    <div className="productlist-container">
      <Sidebar />
      <div>
        <Chips />
        <div className="recommended-videos">
        <div className="loader">
          {isLoading && "...Loading"}
        </div>
          {filteredData.length===0 && "No Information available"}
          {filteredData && filteredData.map(({ id, title, img, price, rating }) => (
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
                {!state.productList.find((item) => item.id === id).cartedState
                  .addedWish && (
                  <span
                    onClick={() =>
                      dispatch({
                        type: "AddToWish",
                        payload: { id, title, price, rating, img },
                      })
                    }
                    className="card-icon material-icons"
                  >
                    favorite_border
                  </span>
                )}
                {state.productList.find((item) => item.id === id).cartedState
                  .addedWish && (
                  <span
                    onClick={() =>
                      dispatch({
                        type: "RemoveFromWish",
                        payload: { id, title, price, rating, img },
                      })
                    }
                    className="card-icon material-icons"
                  >
                    favorite
                  </span>
                )}
              </div>
              {!state.productList.find((item) => item.id === id).cartedState
                .addedCart && (
                <button
                  onClick={() => {
                      dispatch({
                          type: "AddToCart",
                          payload: { id, title, price, rating, img },
                        });
                  }}
                  className="card-btn"
                >
                  Add to Cart
                </button>
              )}
              {state.productList.find((item) => item.id === id).cartedState
                .addedCart && (
                <Link className="link-tag" to="/cartmanagement">
                  <button className="card-btn-go">Go to Cart</button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingpage;

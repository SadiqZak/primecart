import React, { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
// import data from "../../Backend/db/data";
import Chips from "../../Components/Chips/Chips";
import { CardContext } from "../../backend/utils/card-context";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../backend/utils/auth-context";
import { Navigate, useLocation } from "react-router-dom";

const ProductListingpage = () => {
  const { filteredData, dispatch, state } = useContext(CardContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation();
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
                  //   <Link to="/wishmanagement"><span className="card-icon material-icons">
                  //   favorite
                  // </span></Link>
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
                    // return !isLoggedIn
                    //   ? navigate('/login'):
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

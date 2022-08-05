import React, { useState, useContext } from "react";
import "./SingleProductsPage.css";
import { useParams, Link } from "react-router-dom";
import { CardContext } from "../../context/card-context";
import Header from "../../Components/Header/Header";
import {FaCaretLeft} from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductsPage = () => {
  const { productId } = useParams();
  const { state, dispatch } = useContext(CardContext);
  const { productList } = state;

  const findProduct = productList.find((product) => product._id === productId);
  const { _id, img, title, rating, id, price, description, count } =
    findProduct;
  const { material, additional } = description;
  return (
    <div>
      <div className="pos-sticky">
        <Header />
      </div>
      <div className="single-card-product">
        <Link className="link-tag" to="/plp">
          <button className="card-btn flex-center"><FaCaretLeft/>Go back to products page</button>
        </Link>
        <div className="single-product-wrapper">
          <div>
            <img className="single-thumbnail" src={img} alt="product" />
          </div>
          <div className="singlecard-footer-details">
            <div className="single-product-header">
              <span className="card-title"> {title}</span>
              <div className="single-price">{`₹ ${price} /-`}</div>
              <small>{material}</small>
            </div>

            <div>
              {" "}
              <strong>Description: </strong>
              {additional}
            </div>

            <div className="singlecard-footer">
              <div className="card-rating">{`★${rating}`}</div>
              {!state.productList.find((item) => item.id === id).cartedState
                .addedWish && (
                <span
                  onClick={() =>{
                    dispatch({
                      type: "AddToWish",
                      payload: { id, title, price, rating, img },
                    });
                    toast.success("Added to Wishlist")
                  }
                  }
                  className="card-icon material-icons"
                >
                  favorite_border
                </span>
              )}
              {state.productList.find((item) => item.id === id).cartedState
                .addedWish && (
                <span
                  onClick={() =>{
                    dispatch({
                      type: "RemoveFromWish",
                      payload: { id, title, price, rating, img },
                    });
                    toast.success("Removed from Wishlist")
                  }
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
                    payload: { id, title, price, rating, img, count },
                  });
                  toast.success("Added to Cart")
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
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default SingleProductsPage;

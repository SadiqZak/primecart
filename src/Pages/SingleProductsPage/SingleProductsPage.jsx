import React, { useState, useContext } from "react";
import "./SingleProductsPage.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CardContext } from "../../context/card-context";
import Header from "../../Components/Header/Header";
import {FaCaretLeft} from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const SingleProductsPage = () => {
  const { productId } = useParams();
  const { state, dispatch } = useContext(CardContext);
  const { productList } = state;
  const navigate = useNavigate()

  useEffect(()=>{
    if(productList.find((product) => product._id === productId)==null){
      navigate('/plp')
    }
  },[productList.find((product) => product._id === productId)])


  const findProduct = productList.find((product) => product._id === productId);
  // const { img, title, rating, id, price, description, count } = findProduct;
  // const { material, additional } = description;
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
            <img className="single-thumbnail" src={findProduct?.img} alt="product" />
          </div>
          <div className="singlecard-footer-details">
            <div className="single-product-header">
              <span className="card-title"> {findProduct?.title}</span>
              <div className="single-price">{`₹ ${findProduct?.price} /-`}</div>
              <small>{findProduct?.description.material}</small>
            </div>

            <div>
              {" "}
              <strong>Description: </strong>
              {findProduct?.description.additional}
            </div>

            <div className="singlecard-footer">
              <div className="card-rating">{`★${findProduct?.rating}`}</div>
              {!state.productList.find((item) => item.id === findProduct?.id)?.cartedState
                .addedWish && (
                <span
                  onClick={() =>{
                    dispatch({
                      type: "AddToWish",
                      payload: { id:findProduct?.id, title:findProduct?.title, price:findProduct?.price, rating:findProduct?.rating, img:findProduct?.img },
                    });
                    toast.success("Added to Wishlist")
                  }
                  }
                  className="card-icon material-icons"
                >
                  favorite_border
                </span>
              )}
              {state.productList.find((item) => item.id === findProduct?.id)?.cartedState
                .addedWish && (
                <span
                  onClick={() =>{
                    dispatch({
                      type: "RemoveFromWish",
                      payload: { id:findProduct?.id, title:findProduct?.title, price:findProduct?.price, rating:findProduct?.rating, img:findProduct?.img },
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

            {!state.productList.find((item) => item.id === findProduct?.id)?.cartedState
              .addedCart && (
              <button
                onClick={() => {
                  dispatch({
                    type: "AddToCart",
                    payload: { id:findProduct?.id, title:findProduct?.title, price:findProduct?.price, rating:findProduct?.rating, img:findProduct?.img, count:findProduct?.count },
                  });
                  toast.success("Added to Cart")
                }}
                className="card-btn"
              >
                Add to Cart
              </button>
            )}
            {state.productList.find((item) => item.id === findProduct?.id)?.cartedState
              .addedCart && (
              <Link className="link-tag" to="/cartmanagement">
                <button className="card-btn-go">Go to Cart</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000}/>
    </div>
  );
};

export default SingleProductsPage;

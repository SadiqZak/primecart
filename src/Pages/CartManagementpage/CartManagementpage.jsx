import React, { useContext, useEffect } from "react";
import { CardContext } from "../../context/card-context";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { FaCaretLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartManagementpage = () => {
  const { state, dispatch } = useContext(CardContext);

  useEffect(() => {
    dispatch({ type: "TotalAmount" });
  }, [state.cartProducts]);

  return (
    <div>
      <div className="pos-sticky">
        <Header />
      </div>
      <div className="cart-management">
        <div className="cart-manage-header">
          <Link className="link-tag" to="/plp">
            <button className="card-btn flex-center">
              <FaCaretLeft />
              Go back to products page
            </button>
          </Link>
          <h1>My Cart: {state.addedCartProducts} </h1>
        </div>

        <div className="cart-management-wrapper">
          <div className="cart-product-listing">
            {state.cartProducts.map(
              ({ id, _id, img, title, rating, price, count }) => (
                <div key={id} className="cart-management-card">
                  <Link to={`/singlepage/${_id}`}>
                    <div className="card-products-wrapper">
                      <img className="card-thumbnail" src={img} alt="product" />
                      <div className="card-footer">
                        <div className="card-title">{title}</div>
                      </div>
                    </div>
                  </Link>
                  <div className="card-footer-details">
                    <div className="card-rating">{`★${rating}`}</div>
                    <div>{`Price: ₹${price} Qty: ${count}`}</div>
                    {!state.productList.find((item) => item.id === id)
                      .cartedState.addedWish && (
                      <span
                        onClick={() =>{
                          dispatch({
                            type: "AddToWish",
                            payload: { id, title, price, rating, img },
                          });
                          toast.success("Added to Wish")
                        }
                          
                        }
                        className="card-icon material-icons"
                      >
                        favorite_border
                      </span>
                    )}
                    {state.productList.find((item) => item.id === id)
                      .cartedState.addedWish && (
                      //   <Link to="/wishmanagement"><span className="card-icon material-icons">
                      //   favorite
                      // </span></Link>
                      <span
                        onClick={() => {
                          dispatch({
                            type: "RemoveFromWish",
                            payload: { id, title, price, rating, img, _id },
                          });
                          toast.success("Removed from Wish");
                        }}
                        className="card-icon material-icons"
                      >
                        favorite
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "RemoveFromCart",
                        payload: { id, _id, title, price, rating, img, count },
                      });
                      toast.success("Removed from Cart");
                    }}
                    className="card-btn-go  "
                  >
                    Remove from Cart
                  </button>
                </div>
              )
            )}
          </div>
          <div className="cart-price">
            <div>
              <div className="cart-price-wrapper">
                <h3>Price Details</h3>
                <div>
                  {state.cartProducts?.map(({ title, price, id, count }) => (
                    <div key={id} className="cart-flex">
                      <div className="card-products-title">{title}</div>
                      <div className="quantity">
                        <button
                          className="quantity-button"
                          onClick={() => {
                            return count > 1
                              ? dispatch({ type: "DecreaseCount", payload: id })
                              : count;
                          }}
                        >
                          -
                        </button>
                        <div className="quantity-count">{count}</div>
                        <button
                          className="quantity-button"
                          onClick={() => {
                            return count > 0
                              ? dispatch({ type: "IncreaseCount", payload: id })
                              : count;
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div>₹ {price}</div>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="cart-flex">
                  <div>Total Amount:</div>
                  <div>₹ {state.totalAmount}</div>
                </div>
              </div>
              <div>
                <button className="card-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CartManagementpage;

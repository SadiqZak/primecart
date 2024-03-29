import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/card-context";
import Header from "../../Components/Header/Header";
import { FaCaretLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishListManagement = () => {
  const { state, dispatch } = useContext(CardContext);
  console.log(state.wishProducts);
  return (
    <div>
      {" "}
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
          <h1>My WishList: {state.addedWishProducts} </h1>
        </div>

        <div>
          <div className="wish-product-listing">
            {state.wishProducts.map(
              ({ id, _id, count, img, title, rating, price }) => (
                <div key={id} className="card-products">
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
                    <div>{`₹ ${price}`}</div>
                    {!state.productList.find((item) => item.id === id)
                      .cartedState.addedWish && (
                      <span
                        onClick={() =>{
                          dispatch({
                            type: "AddToWish",
                            payload: { _id, id, title, price, rating, img },
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
                        onClick={() =>{
                          dispatch({
                            type: "RemoveFromWish",
                            payload: { _id, id, title, price, rating, img },
                          })
                          toast.success("Removed from Wish")
                        }
                         
                        }
                        className="card-icon material-icons"
                      >
                        favorite
                      </span>
                    )}
                  </div>
                  {/* <button
                onClick={() =>
                  dispatch({
                    type: "RemoveFromWish",
                    payload: { id, title, price, rating, img },
                  })
                }
                className="card-btn-go  "
              >
                Remove from Wish List
              </button> */}
                  {!state.productList.find((item) => item.id === id).cartedState
                    .addedCart && (
                    <button
                      onClick={() =>{
                        dispatch({
                          type: "AddToCart",
                          payload: {
                            id,
                            title,
                            price,
                            rating,
                            img,
                            count,
                            _id,
                          },
                        });
                        toast.success("Added to Cart")
                      }
                        
                      }
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
              )
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000}/>
    </div>
  );
};

export default WishListManagement;

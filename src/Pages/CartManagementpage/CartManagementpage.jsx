import React, { useContext, useEffect } from "react";
import { CardContext } from "../../context/card-context";
import { Link } from "react-router-dom";

const CartManagementpage = () => {
  const { state, dispatch } = useContext(CardContext);
  useEffect(()=>{
      dispatch({type:"TotalAmount"})
  },[])
  
  return (
    <div className="cart-management">
      <div className="cart-manage-header">
      <Link className="link-tag" to="/plp"><button className="card-btn">Go to products page</button></Link>
      <h1>My Cart: {state.addedCartProducts} </h1>
      </div>
      
      <div className="cart-management-wrapper">
        <div className="cart-product-listing">
          {state.cartProducts.map(({ id, img, title, rating, price }) => (
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
                {
                  !state.productList.find((item)=>item.id===id).cartedState.addedWish &&
                  <span onClick={()=> dispatch({
                    type: "AddToWish",
                    payload: { id, title, price, rating, img },
                  })} className="card-icon material-icons">
                favorite_border
              </span>
                }
                {
                  state.productList.find((item)=>item.id===id).cartedState.addedWish &&
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
                }
              </div>
              <button
                onClick={() =>
                  dispatch({
                    type: "RemoveFromCart",
                    payload: { id, title, price, rating, img },
                  })
                }
                className="card-btn-go  "
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
        <div className="cart-price">
          <div>
            <div className="cart-price-wrapper">
              <h3>Price Details</h3>
              <div>
                {
                    state.cartProducts.map(({title, price, id})=>(
                        <div key={id} className="cart-flex">
                            <div>{title}</div>  
                            <div>₹ {price}</div>
                        </div>
                        
                    ))
                }
              </div>
              <hr />
              <div className="cart-flex">
                <div>Total Amount:</div>
                <div>₹ {state.totalAmount}</div>
              </div>
            </div>
            <div>
                <button
                  className="card-btn"
                >
                  Place Order
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartManagementpage;

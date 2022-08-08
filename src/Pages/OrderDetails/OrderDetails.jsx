import React, {useEffect} from "react";
import Header from "../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardContext } from "../../context/card-context";
import { useContext } from "react";
import "./OrderDetail.css";

const OrderDetails = () => {
  const { state } = useContext(CardContext);
  const { currentDispatchDetails} = state;
  const navigate = useNavigate()
  
  useEffect(() => {
    if(Object.keys(currentDispatchDetails).length===0){
      navigate("/plp")
    }
  }, [])
  
  return (
    <div>
      <div className="pos-sticky">
        <Header />
      </div>
      <div className="checkout-cart-management">
        <div className="cart-manage-header">
          <Link className="link-tag" to="/plp">
            <button className="card-btn flex-center">
              <FaCaretLeft />
              Go back to products page
            </button>
          </Link>
        </div>

        <div className="checkout-wrapper">
          <div className="order-details">
            <h3>Order Placed Successfully!</h3>
            <h4>Order will be delivered in the next {Math.floor(Math.random()*10)+1} business days</h4>
            <div className="orderdetails-cont">
              <div className="orderdetails-wrapper">
                <div>
                <h4>Order Details</h4>
                <p>
                  <strong>Name: </strong>
                  {currentDispatchDetails?.name}
                </p>
                <p>
                  <strong>Address: </strong>
                  {currentDispatchDetails?.address?.doorNo}{" "}
                  {currentDispatchDetails?.address?.area}{" "}
                  {currentDispatchDetails?.address?.district}
                </p>
                <p>
                  <strong>Contact: </strong>
                  {currentDispatchDetails?.contact}
                </p>
                <h4>Total Amount Paid: ₹{currentDispatchDetails?.amount}</h4>
                </div>
                
                <div className="thank">
                <h1>Thank you for shopping with us!</h1>
                </div>
               
              </div>
              <div className="orderdetails-right">
                {currentDispatchDetails?.cart?.map((ele) => (
                  <div key={ele.id} className="ordered-products">
                      <div>
                        <img
                          className="ordered-card-thumbnail"
                          src={ele.img}
                          alt="product"
                        />
                      </div>

                      <div className="card-footer">
                        <div className="card-title">{ele.title}</div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={1000} />
      </div>
    </div>
  );
};

export default OrderDetails;

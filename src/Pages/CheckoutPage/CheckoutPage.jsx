import React from "react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardContext } from "../../context/card-context";
import Header from "../../Components/Header/Header";
import { FaCaretLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CheckoutPage.css";
import { useState } from "react";

const CheckoutPage = () => {
  const { state, dispatch, getAllProducts } = useContext(CardContext);
  const { totalAmount, cartProducts } = state;
  const [userAddress, setUserAddress] = useState([{
    name:"Jason Stathom",
    address:"#588 Puttenahalli Rd, Ashta Laxmi Layout, JP Nagar VI Phase, J P Nagar",
    mobile:"800029900",
    checked: false
  }])

  const navigate = useNavigate()

  useEffect(()=>{
    if(cartProducts.length===0){
        navigate('/plp')
    }
  },[])

  const clearCart = ()=>{
    dispatch({type:"ClearCart"})
  }

  const selectHandler = ()=>{
    return
    // setUserAddress((prev)=>prev[0].checked!=true)
  }

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayPaymentGateway = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_bDBEMlnJXpGhZV",
      currency: "INR",
      amount: totalAmount * 100,
      name: "PrimeCart",
      description: "Thank you for shopping with us!",
      image: "",
      handler: function (response) {
        if(response){
            toast.success(response.razorpay_payment_id);
            clearCart()
            getAllProducts()
            navigate('/orderdetails')
        }
        
      },
      prefill: {
        name: "Guest User",
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
      theme: {
        color: "#2B51E1",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <div className="pos-sticky">
        <Header />
      </div>
      <div className="checkout-cart-management">
        <div className="cart-manage-header">
          <Link className="link-tag" to="/cartmanagement">
            <button className="card-btn flex-center">
              <FaCaretLeft />
              Go back to Cart
            </button>
          </Link>
        </div>

        <div className="checkout-wrapper">
          <div className="checkout-cart">
            <h3>Shipping details</h3>
            <hr />
            <div className="address">
              <div className="address-child">{
                userAddress?.map((user)=>(
                    <div onClick={selectHandler} className="user-address-cont">
                    <input type="radio" name="details"/>
                    <div className="user-address">
                    <h3>{user.name}</h3>
                    <div>{user.address}</div>
                    <div>{user.mobile}</div>
                    </div>
                    </div>
                
                ))
              }</div>
              <button className="card-btn wd-300">Add New +</button>
            </div>
          </div>
          <div className="cart-price">
            <div>
              <div className="cart-price-wrapper">
                <h3>Price Details</h3>
                <div></div>
                <hr />
                <div className="cart-flex">
                  <div>Amount:</div>
                  <div>{`Purchase items: ${cartProducts.length}`}</div>
                  <div>₹ {totalAmount}</div>
                </div>
                <div className="cart-flex">
                  <div>Discount:</div>
                  <div>- ₹{0}</div>
                </div>
                <hr />
                <div className="cart-flex">
                  <div>Total Amount:</div>
                  <div>₹{totalAmount}</div>
                </div>
              </div>
              <div>
                <button onClick={displayPaymentGateway} className="card-btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
};

export default CheckoutPage;

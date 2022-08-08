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
  const { totalAmount, cartProducts, currentDispatchDetails } = state;
  const [currentAddress, setCurrentAddress] = useState({});
  const [addAddress, setAddAddress] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    address: {
      doorNo: "",
      area: "",
      district: "",
    },
    contact: "",
    cart: cartProducts,
    amount: totalAmount,
  });
  const [userAddress, setUserAddress] = useState([
    {
      name: "Jason Stathom",
      address: {
        doorNo: "#588 Puttenahalli Rd",
        area: "Ashta Laxmi Layout, JP Nagar VI Phase, J P Nagar",
        district: "Bengaluru",
      },
      contact: "8000299001",
      cart: cartProducts,
      amount: totalAmount,
    },
    {
      name: "Keanu Reeves",
      address: {
        doorNo: "Shop No. 1010, Near Navarang Bar",
        area: "6th Block, Dr. Rajakumar Road, Rajaji Nagar, Srirampuram",
        district: "Bengaluru",
      },
      contact: "8008900032",
      cart: cartProducts,
      amount: totalAmount,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate("/plp");
    }
  }, []);

  const clearCart = () => {
    dispatch({ type: "ClearCart" });
  };

  const selectHandler = (e) => {
    let userID = e.target.value;
    let addressDispatch = userAddress.find((user) => user.contact === userID);
    dispatch({ type: "UpdateAddress", payload: addressDispatch });
    setCurrentAddress(addressDispatch);
  };

  const proceedToCheckout = () => {
    if (Object.keys(currentAddress).length !== 0) {
      displayPaymentGateway();
    } else {
      toast.error("Please select or add address");
    }
  };

  const addNewAddress = () => {
    setAddAddress((prev) => !prev);
  };

  const newAddressFormHandler = (e) => {
    e.preventDefault();
    if(userInput.contact.length!==10){
      toast.error("Contact number should be 10 digits")
    }else{
      if(userAddress.some((user)=>user.contact===userInput.contact)){
        toast.error("Address details already exist")
      }else{
        setUserAddress(() => {
          return [...userAddress, userInput];
        });
      }
    }
    setAddAddress((prev) => !prev);
    setUserInput({
      name: "",
      address: {
        doorNo: "",
        area: "",
        district: "",
      },
      contact: "",
      cart: cartProducts,
      amount: totalAmount,
    })
  
  };

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
        if (response) {
          toast.success("Order placed successfully");
          clearCart();
          getAllProducts();
          setTimeout(() => {
            navigate("/orderdetails");
          }, [2000]);
        }
      },
      prefill: {
        name: "Guest User",
        email: "sdfdsjfh2@ndsfdf.com",
        contact: "9899999999",
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
              <div className="address-child">
                {userAddress?.map((user) => (
                  <div className="user-address-cont">
                    <input
                      checked={user.contact === currentAddress.contact}
                      onClick={selectHandler}
                      value={user.contact}
                      type="radio"
                      name="details"
                      id={user.contact}
                    />
                    <label htmlFor={user.contact} className="user-address">
                      <h3>{user.name[0].toUpperCase() + user.name.slice(1)}</h3>
                      <div>{`${user.address.doorNo} ${user.address.area} ${user.address.district}`}</div>
                      <div>{user.contact}</div>
                    </label>
                  </div>
                ))}
              </div>
              <button onClick={addNewAddress} className="card-btn wd-300">
                Add New +
              </button>
            </div>
            {addAddress && (
              <div className="modal">
                <form
                  className="modal-wrapper"
                  onSubmit={newAddressFormHandler}
                >
                  <div className="flex-dir-column-login">
                    <label htmlFor="name">Name: </label>
                    <input
                      onChange={(e) =>
                        setUserInput({ ...userInput, name: e.target.value })
                      }
                      className="login-inp"
                      type="text"
                      id="name"
                      value={userInput.name}
                    />
                  </div>
                  <div className="flex-dir-column-login">
                    <label htmlFor="address">Address: </label>
                    <div className="flex-column">
                      <label htmlFor="addressDoor">Door No.</label>
                      <input
                        onChange={(e) =>
                          setUserInput({
                            ...userInput,
                            address: {
                              ...userInput.address,
                              doorNo: e.target.value,
                            },
                          })
                        }
                        className="login-inp"
                        type="text"
                      value={userInput.address.doorNo}
                        id="addressDoor"
                      />
                    </div>
                    <div className="flex-column">
                      <label htmlFor="addressArea">Area/Locality</label>
                      <input
                        onChange={(e) =>
                          setUserInput({
                            ...userInput,
                            address: {
                              ...userInput.address,
                              area: e.target.value,
                            },
                          })
                        }
                        className="login-inp"
                        type="text"
                        
                      value={userInput.address.area}
                        id="addressArea"
                      />
                    </div>
                    <div className="flex-column">
                      <label htmlFor="addressDistrict">District</label>
                      <input
                        onChange={(e) =>
                          setUserInput({
                            ...userInput,
                            address: {
                              ...userInput.address,
                              district: e.target.value,
                            },
                          })
                        }
                        className="login-inp"
                        type="text"
                      value={userInput.address.district}
                        id="addressDistrict"
                      />
                    </div>
                  </div>
                  <div className="flex-dir-column-login">
                    <label htmlFor="contact">Contact No.: </label>
                    <input
                      onChange={(e) =>
                        setUserInput({ ...userInput, contact: e.target.value })
                      }
                      className="login-inp"
                      type="text"
                      id="contact"
                      value={userInput.contact}
                    />
                  </div>
                  <button className="login-btn">Submit</button>
                </form>
              </div>
            )}
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
                <button onClick={proceedToCheckout} className="card-btn">
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

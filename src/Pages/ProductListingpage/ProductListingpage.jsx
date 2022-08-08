import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chips from "../../Components/Chips/Chips";
import { CardContext } from "../../context/card-context";
import { Link} from "react-router-dom";
import Header from "../../Components/Header/Header";
import {FaAngleUp} from "react-icons/fa"
import {FaAngleDown} from "react-icons/fa"
// import ReactLoading from 'react-loading';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductListingpage = () => {
  const { filteredData, dispatch, state, isLoading } = useContext(CardContext);
  const [filter, setFilter] = useState(false)

  return (
    <div> 
      <div className="pos-sticky">
      <Header/>
      <Chips />
      </div>
       <div className="productlist-container">
      <Sidebar filter={filter} />
      <div className={`recommended-cont ${filter && `display-none`}`}>
        <div className="recommended-videos">
        <div className="loader">
          {isLoading && "...Loading"}
        </div>
          {filteredData.length===0 && "No Information available"}
          {filteredData && filteredData.map(({ _id, id, title, img, price, rating, count }) => (
         
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
                {!state.productList.find((item) => item.id === id).cartedState
                  .addedWish && (
                  <span
                    onClick={() =>{
                      dispatch({
                        type: "AddToWish",
                        payload: { id, title, price, rating, img, _id },
                      });
                      toast.success("Added to Wish")
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
                        payload: { id, title, price, rating, img, _id },
                      });
                      toast.success("Removed from Wish")
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
                          payload: { id,_id, title, price, rating, img, count },
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
          ))}
        </div>
      </div>
    </div>
    <div className="sidebar-toggle-button" onClick={()=>setFilter((prev)=>!prev)}>
      {
        !filter ? <FaAngleUp/> : <FaAngleDown/> 
      }
          
          <p>Filter</p>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000}/>
    </div>
     );
};

export default ProductListingpage;

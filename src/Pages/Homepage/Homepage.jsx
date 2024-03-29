import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Header from "../../Components/Header/Header"
import { CardContext } from "../../context/card-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const {dispatch}= useContext(CardContext)

  const clickHandlerShoes = ()=>{
    dispatch({type:"shoes"})
  }

  const clickHandlerLaces = ()=>{
    dispatch({type:"laces"})
  }

  const clickHandlerExplore = ()=>{
    dispatch({type:"All"})
  }
  return (
    <div>
      <div className="pos-sticky">
      <Header/>
      </div>
      <img
        className="cover"
        src={require("../../Assets/cover.jpg")}
        alt="homepage"
      />
      <div className="cover-wrapper">
        <div className="cover-text">FOR COLOURFUL STEPS IN YOUR LIFE</div>
        <div className="btn-wrapper">
          <button className="cover-btn"><Link onClick={clickHandlerExplore} className="link-tag-btn" to={'/plp'}>Explore</Link></button>
        </div>
        
      </div>

      <div className="secondary-cover-container">
      <Link onClick={clickHandlerShoes} to={'/plp'}><div>
          <img
            className="secondary-cover"
            src={require("../../Assets/secondary-cover-1.jpg")}
            alt="homepage"
          />
        </div></Link>
        
        <Link onClick={clickHandlerLaces} to={'/plp'}><div>
          <img
            className="secondary-cover"
            src={require("../../Assets/secondary-cover-2.jpg")}
            alt="homepage"
          />
        </div></Link>
      </div>
      <div className="footer">
          <div className="color-primary">©PrimeCart, Inc.</div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000}/>
    </div>
  );
};

export default Homepage;

import React, {useContext} from "react";
import Logo from "./Logo/Logo";
import Badge from "./Badge/Badge";
import {Link} from "react-router-dom";


const Header = () => {

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/"><Logo /></Link>
        
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header-right">
          <Badge path={"/"} icon={"favorite_border"} type={"ADD_TO_WISH"} />
          <Badge path={"/cartmanagement"} icon={"shopping_cart"} type={"ADD_TO_CART"} />
          <div>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

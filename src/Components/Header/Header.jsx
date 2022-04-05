import React from "react";
import Logo from "./Logo/Logo";
import Badge from "./Badge/Badge";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header-right">
          <Badge icon={"favorite_border"} type={"ADD_TO_WISH"} />
          <Badge icon={"shopping_cart"} type={"ADD_TO_CART"} />
          <div>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

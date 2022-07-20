import React, {useContext} from "react";
import Logo from "./Logo/Logo";
import Badge from "./Badge/Badge";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/auth-context";


const Header = () => {
  const navigate = useNavigate()
  const { auth, setAuth} = useContext(AuthContext)
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/"><Logo /></Link>
        
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header-right">
          <Badge path={"/wishmanagement"} icon={"favorite_border"} type={"ADD_TO_WISH"} />
          <Badge path={"/cartmanagement"} icon={"shopping_cart"} type={"ADD_TO_CART"} />
          <div>
          { !auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              setAuth({...auth, isAuthenticated:!auth.isAuthenticated})
            }}
          >
            Logout
          </button>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

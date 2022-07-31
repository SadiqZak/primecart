import React, { useContext, useState } from "react";
import Logo from "./Logo/Logo";
import Badge from "./Badge/Badge";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { CardContext } from "../../context/card-context";

const Header = () => {
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");
  const [userSearchResults, setUserSearchResults] = useState("");
  const { stateAuth, dispatchAuth } = useContext(AuthContext);
  const { state, dispatch } = useContext(CardContext);
  const { isAuthenticated } = stateAuth;
  const { productList } = state;

  const test = (arr, sub) => {
    sub = sub.toLowerCase();
    return arr.filter((str) => str.title.toLowerCase().match(sub));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value);
    setUserSearchResults(test(productList, e.target.value));
  };

  const searchClickHandler = () => {
    setUserSearch("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(userSearchResults.length!==0){
      dispatch({type:'SearchFilterData', payload:userSearchResults})
    }
    setUserSearch("");
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <Logo />
        </Link>

        <form className="search-form" onSubmit={submitHandler}>
          <div className="search">
            <input placeholder="Type here to start searching..." type="text" value={userSearch} onChange={searchHandler} />
            {
              userSearch.length===0 ? <span className="search-icon material-icons">search</span> 
              : <span onClick={()=> setUserSearch("")} className="search-icon"><strong>X</strong></span> 
            }
            
          </div>
          {userSearch.length !== 0 && (
            <div className="search-dropdown">
              {userSearchResults.length !== 0 ? (
                userSearchResults?.map((userResult) => (
                  <Link
                  key={userResult._id}
                    onClick={searchClickHandler}
                    className="header-link"
                    to={`/singlepage/${userResult._id}`}
                  >
                    <div className="user-search-container">
                      <div className="user-result-img-cont">
                        <img
                          className="user-result-img"
                          src={userResult.img}
                          alt="img"
                        />
                      </div>
                      <div className="user-result-title-cont">
                        <div className="user-result-title">
                          {userResult.title}
                        </div>
                        <small>{userResult.description.material}</small>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>No information available</div>
              )}
            </div>
          )}
        </form>

        <div className="header-right">
          <Badge
            path={"/wishmanagement"}
            icon={"favorite_border"}
            type={"ADD_TO_WISH"}
          />
          <Badge
            path={"/cartmanagement"}
            icon={"shopping_cart"}
            type={"ADD_TO_CART"}
          />
          <div>
            {!isAuthenticated && (
              <button
                className="login-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
            {isAuthenticated && (
              <button
                className="login-btn"
                onClick={() => {
                  dispatchAuth({ type: "logoutUser" });
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

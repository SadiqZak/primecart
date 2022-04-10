import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../backend/utils/auth-context";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="cart-management">
        <div className="cart-manage-header">
          <h2>Please Login to continue</h2>
          <small>You are trying to access: {location.state?.from.pathname=== "/cartmanagement" && "Cart"}{location.state?.from.pathname=== "/wishmanagement" && "Wishlist"}</small>
        </div>

        <div>
          <div className="login-wrapper">
            <form className="login-form" action="">
                <div className="flex-dir-column-login">
                <small>Email:</small>
                <input className="login-inp" type="text" />
                </div>
                
                <div className="flex-dir-column-login">
                <small>Password:</small>
                <input className="login-inp" type="password" />
                </div>
               
            </form>
            <button className="login-btn">Login</button>
            {location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  setIsLoggedIn((prevVal) => !prevVal);
                  navigate(location.state?.from?.pathname);
                }}
              >
                Login as Guest
              </button>
            )}
            {!location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  setIsLoggedIn((prevVal) => !prevVal);
                  navigate("/");
                }}
              >
                Login as Guest
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import Header from "../../Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, stateAuth } = useContext(AuthContext);
  const { isAuthenticated } = stateAuth;
  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    Promise.resolve(loginUser({ email: userLog.email, password: userLog.password }))
    .then((response) => {
      if (response) {
        toast.success("User logged in");
        setTimeout(() => {
          return location.state?.from?.pathname? navigate(location.state?.from?.pathname): navigate("/");
        }, [2000]);
      } else {
        toast.error("Please enter correct credentials");
      }
    });
  };

  const GuestLoginHandler = async (e) => {
    e.preventDefault();
    Promise.resolve(loginUser({ email: "adarshbalika@gmail.com", password: "adarshbalika" }))
    .then((response) => {
      if (response) {
        toast.success("User logged in");
        setTimeout(() => {
          return location.state?.from?.pathname? navigate(location.state?.from?.pathname): navigate("/");
        }, [2000]);
      } else {
        toast.error("Please enter correct credentials");
      }
    });
  };

  const dummyDataHandler = () => {
    setUserLog({
      ...userLog,
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };

  //adarshbalika@gmail.com adarshbalika

  return (
    <div>
      <div className="pos-sticky">
        <Header />
      </div>
      <div className="cart-management">
        <div className="cart-manage-header">
          <h2>Please Login to continue</h2>
          <small>
            You are trying to access:{" "}
            {location.state?.from.pathname === "/cartmanagement" && "Cart"}
            {location.state?.from.pathname === "/wishmanagement" && "Wishlist"}
          </small>
          <button onClick={dummyDataHandler} className="login-btn">
            Dummy Data
          </button>
        </div>

        <div>
          <div className="login-wrapper">
            <form onSubmit={loginHandler} className="login-form" action="">
              <div className="flex-dir-column-login">
                <small>Email:</small>
                <input
                  value={userLog.email}
                  onChange={(e) =>
                    setUserLog({ ...userLog, email: e.target.value })
                  }
                  className="login-inp"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex-dir-column-login">
                <small>Password:</small>
                <input
                  value={userLog.password}
                  onChange={(e) =>
                    setUserLog({ ...userLog, password: e.target.value })
                  }
                  className="login-inp"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              <button className="login-btn">Login</button>
            </form>

              <button
                className="login-btn"
                onClick={GuestLoginHandler}
              >
                Login as Guest
              </button>
            <div>
              Don't have an account?{" "}
              <Link className="signup-link" to="/signup">
                Sign up here
              </Link>{" "}
            </div>
            <ToastContainer position="bottom-right" autoClose={1000}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const data = await LoginService(userLog.email, userLog.password)

// if(data){
//   setAuth({...auth, token:data.token, isAuthenticated:true})
//   return location.state?.from?.pathname ?  navigate(location.state?.from?.pathname): navigate('/')
// }

import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const { loginUser, stateAuth} = useContext(AuthContext);
  const {isAuthenticated} = stateAuth
  const [userLog, setUserLog] = useState({email:"adarshbalika@gmail.com", password:"adarshbalika"})
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if(isAuthenticated){
      return location.state?.from?.pathname
        ? navigate(location.state?.from?.pathname)
        : navigate("/");
    }
  },[isAuthenticated])

  const loginHandler = async (e)=>{
      e.preventDefault()
      loginUser({email:userLog.email, password:userLog.password})
      return location.state?.from?.pathname ?  navigate(location.state?.from?.pathname): navigate('/')
  }

  return (
    <>
      <div className="cart-management">
        <div className="cart-manage-header">
          <h2>Please Login to continue</h2>
          <small>You are trying to access: {location.state?.from.pathname=== "/cartmanagement" && "Cart"}{location.state?.from.pathname=== "/wishmanagement" && "Wishlist"}</small>
        </div>

        <div>
          <div className="login-wrapper">
            <form onSubmit={loginHandler } className="login-form" action="">
                <div className="flex-dir-column-login">
                <small>Email:</small>
                <input onChange={(e)=> setUserLog({...userLog, email:e.target.value})} className="login-inp" type="email" placeholder="adarshbalika@gmail.com" required/>
                </div>
                
                <div className="flex-dir-column-login">
                <small>Password:</small>
                <input onChange={(e)=> setUserLog({...userLog, password:e.target.value})} className="login-inp" type="password" placeholder="adarshbalika" required/>
                </div>
               
                <button className="login-btn">Login</button>
            </form>
            
            {location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  loginUser({email:userLog.email, password:userLog.password})
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
                  loginUser({email:userLog.email, password:userLog.password})
                  navigate("/");
                }}
              >
                Login as Guest
              </button>
            )}
            <div>Don't have an account? <Link className="signup-link" to='/signup'>Sign up here</Link> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


      // const data = await LoginService(userLog.email, userLog.password)

      // if(data){
      //   setAuth({...auth, token:data.token, isAuthenticated:true})
      //   return location.state?.from?.pathname ?  navigate(location.state?.from?.pathname): navigate('/')
      // }
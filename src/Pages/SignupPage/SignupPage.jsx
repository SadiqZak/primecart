import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

const SignupPage = () => {
    const {signupUser, isAuthenticated} = useContext(AuthContext)
    const [userLog, setUserLog] = useState({firstName:"", lastName: "", email:"", password:""})
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      if(isAuthenticated){
        return location.state?.from?.pathname
          ? navigate(location.state?.from?.pathname)
          : navigate("/");
      }
    },[isAuthenticated])

    const signupHandler =(e)=>{
      e.preventDefault()
      signupUser({email:userLog.email, password:userLog.password, firstName: userLog.firstName, lastName: userLog.lastName})
      return location.state?.from?.pathname ?  navigate(location.state?.from?.pathname): navigate('/')
    }

  return (
    <div className="cart-management">
        <div className="cart-manage-header">
          <h2>Please Signup to continue</h2>
        </div>

        <div>
          <div className="login-wrapper">
            <form onSubmit={signupHandler} className="login-form" action="">
            <div className="flex-dir-column-login">
                <small>First Name:</small>
                <input onChange={(e)=> setUserLog({...userLog, firstName:e.target.value})} className="login-inp" type="text" placeholder="First Name" required/>
                </div>

            <div className="flex-dir-column-login">
                <small>Last Name:</small>
                <input onChange={(e)=> setUserLog({...userLog, lastName:e.target.value})} className="login-inp" type="text" placeholder="Last Name" required/>
                </div>

                <div className="flex-dir-column-login">
                <small>Email:</small>
                <input onChange={(e)=> setUserLog({...userLog, email:e.target.value})} className="login-inp" type="email" placeholder="Email" required/>
                </div>
                
                <div className="flex-dir-column-login">
                <small>Password:</small>
                <input onChange={(e)=> setUserLog({...userLog, password:e.target.value})} className="login-inp" type="password" placeholder="Password" required/>
                </div>
               
                <button className="login-btn">Signup</button>
            </form>
            <div>Already have an account? <Link className="signup-link" to='/login'>Login here</Link> </div>
          </div>
        </div>
      </div>
  )
}

export default SignupPage
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import Header from '../../Components/Header/Header'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

      if(userLog.password.length<8){
        toast.error("Password should be a minimum of 8 characters")
      }
      else if(userLog.password.split("").filter((pass)=>pass===pass.toUpperCase()).length===0){
        toast.error("Password should have atleast 1 uppercase character")
      }
      else if(userLog.password.split("").filter((pass)=>!isNaN(pass)).length===0){
        toast.error("Password should have atleast 1 numeric character")
      }
      else if(userLog.password.split("").filter((pass)=>specialChars.test(pass)).length===0){
        toast.error("Password should have atleast 1 special character")
      }
      else{
        Promise.resolve(signupUser({email:userLog.email, password:userLog.password, firstName: userLog.firstName, lastName: userLog.lastName}))
        .then((response)=>{
          if(response){
            toast.success('User logged in')
            setTimeout(()=>{
              console.log(location.state?.from?.pathname)
              return location.state?.from?.pathname ?  navigate(location.state?.from?.pathname): navigate('/')
            },[2000])
          }else{
            toast.error('User already exists')
          }
        })
      } 
      
    }

    const dummyDataHandler =()=>{
      setUserLog({...userLog, firstName:"Jason", lastName:"Stathom", email:"jasonStathom@gmail.com",password:"jason@1Stathom"})
    }

  return (
    <div>
            <div className="pos-sticky">
      <Header/>
      </div>
    <div className="cart-management">
        <div className="cart-manage-header">
          <h2>Please Signup to continue</h2>
          <button onClick={dummyDataHandler} className="login-btn">Dummy Data</button>
        </div>

        <div>
          <div className="login-wrapper">
            <form onSubmit={signupHandler} className="login-form" action="">
            <div className="flex-dir-column-login">
                <small>First Name:</small>
                <input value={userLog.firstName} onChange={(e)=> setUserLog({...userLog, firstName:e.target.value})} className="login-inp" type="text" placeholder="First Name" required/>
                </div>

            <div className="flex-dir-column-login">
                <small>Last Name:</small>
                <input value={userLog.lastName}  onChange={(e)=> setUserLog({...userLog, lastName:e.target.value})} className="login-inp" type="text" placeholder="Last Name" required/>
                </div>

                <div className="flex-dir-column-login">
                <small>Email:</small>
                <input value={userLog.email}  onChange={(e)=> setUserLog({...userLog, email:e.target.value})} className="login-inp" type="email" placeholder="Email" required/>
                </div>
                
                <div className="flex-dir-column-login">
                <small>Password:</small>
                <input value={userLog.password} onChange={(e)=> setUserLog({...userLog, password:e.target.value})} className="login-inp" type="password" placeholder="Password" required/>
                <small>*Password should be a minimum of 8 characters and should atleast contain 1 uppercase, 1 numeric and 1 special character.</small>
                </div>
               
                <button className="login-btn">Signup</button>
            </form>
            <div>Already have an account? <Link className="signup-link" to='/login'>Login here</Link> </div>
          </div>
          <ToastContainer 
          position="bottom-right"/>
        </div>
      </div>
      </div>
  )
}

export default SignupPage
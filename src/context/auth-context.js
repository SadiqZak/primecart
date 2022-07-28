import { createContext, useReducer, useState } from "react";
import reducerFunc from "../utils/reducer";
import { loginService, signupServices } from "../services/auth-services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [stateAuth, dispatch] = useReducer( reducerFunc, {
    user:"",
    token:"",
    isAuthenticated:false
  })

const loginUser = async ({email, password}) =>{
    try{
        const response = await loginService({email,password}) //response post the API call
        if(response.status === 200 || response.status ===201){ //the response.status includes information regarding the status code
            dispatch({type:"loginUser", payload:response.data})
        }
    }catch(error){
        console.error(error)
    }
}

const signupUser = async({email, password, firstName, lastName})=>{
  try {
    const response = await signupServices({email, password, firstName, lastName})
    dispatch({type:'signupUser', payload: response.data})
  } catch (err) {
    console.error(err)
  }
}

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch, loginUser, signupUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
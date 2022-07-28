import axios from 'axios';

export const loginService = ({email, password})=>{
    return axios.post('/api/auth/login',{
        email,password
    })
}

export const signupServices = ({email, password, firstName, lastName}) =>{
    return axios.post('/api/auth/signup', {
        email, password, firstName, lastName
    })
}
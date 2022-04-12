import axios from 'axios';

export const LoginService = async (email, password) =>{
    try{
        const response = await axios.post('/api/auth/login', {email, password}) //response post the API call
  
        if(response.status === 200 || response.status ===201){ //the response.status includes information regarding the status code
 
            return response.data
        }

    }catch(error){
        console.error(error)
    }
}

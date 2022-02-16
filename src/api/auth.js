
import Axios from 'axios';

const axios = Axios.create({
 baseURL: "https://reqres.in/",
 timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT),
})

export const Login =async (first,second)=>{
   const response = await axios.post('/api/login',{email:first,password:second});
   return response.data;

}
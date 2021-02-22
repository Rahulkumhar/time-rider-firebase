import axios from 'axios'
import { toast } from 'react-toastify';


export const POST = async (url, obj,setToken) => {  
  
   let headers ;
   if(setToken){
    let token = await localStorage.getItem('token')
        headers= {
            'x-auth-token': token
        }
   }
    try {
        let result = await axios.post(url, obj,{
            headers
        })
        console.log(result,'result');
        
        if(result && result.data.error===false){
            return result.data
        } else {
            toast(result && result.data.message)
            return null
        } 
    } catch (err) {
        console.log('ERROR in POST api' ,err)

        return null
    }     
}

export const GET = async (url,obj={},setToken) => {
    let headers ;
    console.log(setToken,'setToken');
   if(setToken){
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTAyMmU1OThhYWZmNWFiYzcxMTVkNiIsImlhdCI6MTYxMzY2NDE1MCwiZXhwIjoxNjc0MTQ0MTUwfQ.php9xb3JW1u2GwFljN90KrteZM4aLoMl2mkO5-JWy68"//await localStorage.getItem('token')
        headers= {
            'x-auth-token': token
        }
   }
    try {
        let result = await axios.get(url,{headers})
        if(result && result.data){
            return result.data
        } else {
            return null
        } 
    } catch (err) {
        console.log('ERROR in GET api' ,err)
        return err
    }  
}
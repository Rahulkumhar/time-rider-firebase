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
   if(setToken){
    let token = await localStorage.getItem('token')
        headers= {
            'x-auth-token':  token
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


export const PUT = async (url,obj={},setToken) => {
    let headers ;
   if(setToken){
    let token = await localStorage.getItem('token')
        headers= {
            'x-auth-token':  token
        }
   }
    try {
        let result = await axios.put(url,obj,{headers})
        if(result && result.data){
            return result.data
        } else {
            return null
        } 
    } catch (err) {
        console.log('ERROR in PUT api' ,err)
        return err
    }  
}

export const DELETE = async (url,obj={},setToken) => {
   let headers ;
   if(setToken){
    let token = await localStorage.getItem('token')
        headers= {
            'x-auth-token':  token
        }
   }
    try {
        let result = await axios.delete(url,{headers})
        if(result && result.data){
            return result.data
        } else {
            return null
        } 
    } catch (err) {
        console.log('ERROR in DELETE api' ,err)
        return err
    }  
}


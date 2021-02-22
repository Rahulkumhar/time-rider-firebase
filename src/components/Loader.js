import React from 'react';
import Loader from "react-loader-spinner";

const LoaderComp = ({loading}) => {
           if(loading === false){
            return (

                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
              />
              
               )
           }else{
               return null
           }
                 
    
   
}
 
export default LoaderComp;
import { config,messages } from '../config/index';
import { driverConstants } from '../constants/driver.constants';
import {GET, POST, PUT} from './response';
import {get} from 'lodash'
import { toast } from 'react-toastify';

export const getDriverListAction = (page) => async (dispatch) => {
    dispatch({type:driverConstants.DRIVER_LOADING, payload: true})
    try {
        let response = await GET(`${config.getDriver}?page_no=${page}`,{},true)
        if(!response.error){   
            return await dispatch({
                type: driverConstants.GET_DRIVER_SUCCESS,payload: response.data
            });     
        }
         
    } catch (err) {
        console.log('ERROR in login action------------->', err)
        dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
    }
}

export const getDriverActiveAction = (obj) => async (dispatch) => {
    dispatch({type:driverConstants.DRIVER_LOADING, payload: true})
    try {
        let response = await PUT(`${config.getDriverActive}`,obj,true)
        if(!response.error){   
            toast.info(response.message)
            return await dispatch({
                type: driverConstants.GET_DRIVER_ACTIVE,payload:obj
            });     
        }else{
            toast.error(response.message)
            return await dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
        }
         
    } catch (err) {
        console.log('ERROR in active action', err)
        dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
    }
}

export const getDriverDocAction = (id) => async (dispatch) => {
    dispatch({type:driverConstants.DRIVER_LOADING, payload: true})
    try {
        let response = await GET(`${config.getDriverDoc}?id=${id}`,{},true)
        if(!response.error){   
            toast.info(response.message)
            return await dispatch({
                type: driverConstants.GET_DRIVER_DOC_LIST,payload:response.data
            });     
        }else{
            toast.error(response.message)
            return await dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
        }
         
    } catch (err) {
        console.log('ERROR in active action-------------->', err)
        dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
    }
}

export const getDeliverDocActiveAction = (obj) => async (dispatch) => {
    dispatch({type:driverConstants.DRIVER_LOADING, payload: true})
    try {
        let response = await PUT(`${config.getDriverDocVerify}`,obj,true)
        if(!response.error){   
            toast.info(response.message)
            return await dispatch({
                type: driverConstants.GET_DRIVER_DOC_ACTIVE,payload:obj
            });     
        }else{
            toast.error(response.message)
            return await dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
        }
         
    } catch (err) {
        console.log('ERROR in active action-------------->', err)
        dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
    }
}



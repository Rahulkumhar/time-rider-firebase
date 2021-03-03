import { config,messages } from '../config/index';
import { riderConstants } from '../constants/rider.constants';
import {GET, POST,PUT} from './response';
import {get} from 'lodash'
import { toast } from 'react-toastify';

export const getRiderListAction = (page=1) => async (dispatch) => {
    dispatch({type:riderConstants.RIDER_LOADING, payload: true})
    try {
        let response = await GET(`${config.getRider}?page_no=${page}`,{},true)
        if(!response.error){   
            return await dispatch({
                type: riderConstants.GET_RIDER_SUCCESS,payload: response.data
            });     
        }
         
    } catch (err) {
        console.log('ERROR in login action', err)
        dispatch({type:riderConstants.GET_RIDER_FAILED,payload:messages.catchErr})
    }
}


export const getRiderActiveAction = (obj) => async (dispatch) => {
    dispatch({type:riderConstants.RIDER_LOADING, payload: true})
    try {
        let response = await PUT(`${config.getRiderActive}`,obj,true)
        if(!response.error){   
            toast.info(response.message)
            return await dispatch({
                type: riderConstants.GET_RIDER_ACTIVE,payload:obj
            });     
        }else{
            toast.error(response.message)
            return await dispatch({type:riderConstants.GET_RIDER_FAILED,payload:messages.catchErr})
        }
         
    } catch (err) {
        console.log('ERROR in active action', err)
        dispatch({type:riderConstants.GET_RIDER_FAILED,payload:messages.catchErr})
    }
}
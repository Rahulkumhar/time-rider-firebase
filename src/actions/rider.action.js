import { config,messages } from '../config/index';
import { riderConstants } from '../constants/rider.constants';
import {GET, POST,PUT} from './response';
import {get} from 'lodash'

export const getRiderListAction = (page) => async (dispatch) => {
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


export const getRiderActiveAction = (id,status) => async (dispatch) => {
    dispatch({type:riderConstants.RIDER_LOADING, payload: true})
    try {
        let response = await PUT(`${config.getRiderActive}?id=${id}&status=${status}`,{},true)
        if(!response.error){   
            return await dispatch({
                type: riderConstants.GET_RIDER_ACTIVE,payload: response.data
            });     
        }
         
    } catch (err) {
        console.log('ERROR in active action', err)
        dispatch({type:riderConstants.GET_RIDER_FAILED,payload:messages.catchErr})
    }
}
import { config,messages } from '../config/index';
import { driverConstants } from '../constants/driver.constants';
import {GET, POST} from './response';
import {get} from 'lodash'



export const getDriverDetailAction = (id) => async (dispatch) => {
    dispatch({type:driverConstants.DRIVER_LOADING, payload: true})
    try {
        let response = await GET(`${config.getDriverDetails}?id=${id}`,{},true)
        if(!response.error){   
            return await dispatch({
                type: driverConstants.GET_DRIVER_DETAIL_SUCCESS,payload: response.data
            });     
        }
         
    } catch (err) {
        console.log('ERROR in login action', err)
        dispatch({type:driverConstants.GET_DRIVER_FAILED,payload:messages.catchErr})
    }
}

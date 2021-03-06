import { config,messages } from '../config/index';
import { riderConstants } from '../constants/rider.constants';
import {GET, POST} from './response';
import {get} from 'lodash'


export const getRiderDetailsAction = (id) => async (dispatch) => {
    dispatch({type:riderConstants.RIDER_LOADING, payload: true})
    try {
        let response = await GET(`${config.getRiderDetails}?id=${id}`,{},true)
        if(!response.error){   
            return await dispatch({
                type: riderConstants.GET_RIDER_DETAIL_SUCCESS,payload: response.data
            });     
        }
         
    } catch (err) {
        console.log('ERROR in login action', err)
        dispatch({type:riderConstants.GET_RIDER_FAILED,payload:messages.catchErr})
    }
}

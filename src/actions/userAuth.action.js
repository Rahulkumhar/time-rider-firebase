import { config,messages } from '../config/index';
import { userConstants } from '../constants/user.constants';
import {GET, POST} from './response';
import {get} from 'lodash'

export const loginAction = (data) => async (dispatch) => {
    dispatch({type:userConstants.AUTH_REQUEST, payload: true})
    console.log(data,'data');
    try {
        let response = await POST(config.login,data)
        if(response){            
        localStorage.setItem('user', JSON.stringify(get(response,'data.user',{})));
        }
        return await dispatch({
            type: userConstants.LOGIN_SUCCESS,payload: response
        });  
    } catch (err) {
        console.log('ERROR in login action', err)
        dispatch({type:userConstants.LOGIN_SUCCESS,payload:messages.catchErr})
    }
}



export const setToken = (token) => async (dispatch) => {
    dispatch({type:userConstants.SET_TOKEN, payload: token|| null})
}


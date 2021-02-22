import { userConstants } from '../constants';

let initialState = {
  loading:false,
  loginRes:null,
  registerRes:null,
  token:null,
  lastUpdateRes:null,
}

export function users(state = initialState, action) {
   
  switch (action.type) {
    case userConstants.AUTH_REQUEST:
      return {
        ...state,
        loading:action.payload,
      }
      break;
      case userConstants.LOGIN_SUCCESS:
        return {
          ...state,
          loading:false,
          loginRes:action.payload
        }
        break;
        case userConstants.SET_TOKEN:
        return {
          ...state,
          token:action.payload
        }
        break;
        case userConstants.REGISTER_SUCCESS:
        return {
          ...state,
          loading:false,
          registerRes:action.payload
        }
        break;
        case userConstants.LAST_UPDATE_SUCCESS:
          return {
            ...state,
            loading:false,
            lastUpdateRes:action.payload
          }
          break;
    default:
      return state
  }
}
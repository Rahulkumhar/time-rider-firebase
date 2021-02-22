import { cilActionRedo } from '@coreui/icons';
import { driverConstants } from '../constants';
const initialState = {
    loading:false,
    driverDetails:{},
    id:'',
    fullname:'',
  }
  


  export const driverDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case driverConstants.DRIVER_LOADING:
        return {...state,loading:true,driverDetails:{} }
        case driverConstants.GET_DRIVER_DETAIL_SUCCESS:
        return {...state,driverDetails:action.payload,
          fullname:action.payload.fullname,id:action.payload._id }
        case driverConstants.GET_DRIVER_FAILED:
        return {...state,loading:false }
      default:
        return state
    }
  }
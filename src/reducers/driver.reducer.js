import { cilActionRedo } from '@coreui/icons';
import { driverConstants } from '../constants';
const initialState = {
    loading:false,
    driverData:[],
    totalPage:null,
    totalItem:5
  }
  

  export const driverListReducer = (state = initialState, action) => {
    switch (action.type) {
      case driverConstants.DRIVER_LOADING:
        return {...state,loading:true,driverData:[] }
        case driverConstants.GET_DRIVER_SUCCESS:
        return {...state,driverData:action.payload.data,
          totalPage:action.payload.total_page,totalItem:action.payload.total_item }
        case driverConstants.GET_DRIVER_FAILED:
        return {...state }
      default:
        return state
    }
  }

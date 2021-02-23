import { cilActionRedo } from '@coreui/icons';
import { riderConstants } from '../constants';
const initialState = {
    loading:false,
    riderData:[],
    totalPage:null,
    totalItem:5,
  }
  
  export const riderReducer = (state = initialState, action) => {
    switch (action.type) {
      case riderConstants.RIDER_LOADING:
        return {...state,loading:true,riderData:[] }
        case riderConstants.GET_RIDER_SUCCESS:
        return {...state,riderData:action.payload.data,
          totalPage:action.payload.total_page,totalItem:action.payload.total_item,loading:true }
        case riderConstants.GET_RIDER_FAILED:
        return {...state,loading:false}
      default:
        return state
    }
  }

  
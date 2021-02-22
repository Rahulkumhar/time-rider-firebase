import { cilActionRedo } from '@coreui/icons';
import { riderConstants } from '../constants';
const initialState = {
    loading:false,
    riderDetail:{},
    id:'',
    fullname:'',
  }
  
 

  export const riderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case riderConstants.RIDER_LOADING:
        return {...state,loading:true,riderDetail:{} }
        case riderConstants.GET_RIDER_DETAIL_SUCCESS:
        return {...state,riderDetail:action.payload,
          fullname:action.payload.fullname,id:action.payload._id
          ,loading:false}
        case riderConstants.GET_RIDER_FAILED:
        return {...state,loading:false }
      default:
        return state
    }
  }
import { cilActionRedo } from '@coreui/icons';
import { riderConstants } from '../constants';
const initialState = {
  loading: false,
  riderData: [],
  totalPage: null,
  totalItem: 5,
  riderDataActive: {},
  message: '',
  riderDocData:[],
  riderDocVerifyMessage:'',
  riderDocVerifyData:[],
}

export const riderReducer = (state = initialState, action) => {
  switch (action.type) {
    case riderConstants.RIDER_LOADING:
      return { ...state, loading: true }
    case riderConstants.GET_RIDER_SUCCESS:
      return {
        ...state, riderData: action.payload.data,
        totalPage: action.payload.total_page, totalItem: action.payload.total_item, loading: false
      }
    case riderConstants.GET_RIDER_FAILED:
      return { ...state, loading: false }
   
      case riderConstants.GET_RIDER_ACTIVE:
      let newRiderData = [...state.riderData]
      newRiderData.find((ele) => ele._id == action.payload.id).is_active = action.payload.status
     
      return { ...state, riderData: newRiderData, loading: false }

      case riderConstants.GET_RIDER_DOC_LIST:
        let riderDocDataNew = [...state.riderData]
        riderDocDataNew.find((ele) => ele._id == action.payload.id).status = action.payload.status
       
        return { ...state, riderDocData: riderDocDataNew, loading: false }
     

      case riderConstants.GET_RIDER_DOC_VERIFY:
        return {
          ...state, riderDocVerifyData:action.payload.data,riderDocVerifyMessage: action.payload.message, loading: false
        }

      case riderConstants.RIDER_LOADING:
      return { ...state, loading: true }
      
      
    default:
      return state
  }
}





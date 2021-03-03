import { cilActionRedo } from '@coreui/icons';
import { riderConstants } from '../constants';
const initialState = {
  loading: false,
  riderData: [],
  totalPage: null,
  totalItem: 5,
  riderDataActive: {},
  message: ''
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
      newRiderData.find((ele) => ele._id == action.payload.id).status = action.payload.status===0?1:0
     
      return { ...state, riderData: newRiderData, loading: false }
    default:
      return state
  }
}





import { cilActionRedo } from '@coreui/icons';
import { driverConstants } from '../constants';
const initialState = {
  loading: false,
  driverData: [],
  driverDocData: [],
  totalPage: null,
  totalItem: 5
}


export const driverListReducer = (state = initialState, action) => {
  switch (action.type) {
    case driverConstants.DRIVER_LOADING:
      return { ...state, loading: true, }
    case driverConstants.GET_DRIVER_SUCCESS:
      return {
        ...state, driverData: action.payload.data,
        totalPage: action.payload.total_page, totalItem: action.payload.total_item
      }
    case driverConstants.GET_DRIVER_ACTIVE:
      let newDriverData = [...state.driverData]
      newDriverData.find((ele) => ele._id == action.payload.id).is_active = action.payload.status
      return { ...state, driverData: newDriverData }
    case driverConstants.GET_DRIVER_DOC_LIST:
      return { ...state, driverDocData: action.payload, loading: false }

    case driverConstants.GET_DRIVER_DOC_ACTIVE:
      let driverDocDataNew = [...state.driverDocData]
      driverDocDataNew.find((ele) => ele._id == action.payload.id).status = action.payload.status
      
      return { ...state, driverDocData: driverDocDataNew, loading: false }
    case driverConstants.GET_DRIVER_FAILED:
      return { ...state }
    default:
      return state
  }
}

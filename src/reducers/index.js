import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { changeState } from './default.reducer';
import { riderReducer } from './rider.reducer';
import { riderDetailsReducer } from './riderDetails.reducer';
import { driverListReducer } from './driver.reducer';
import { driverDetailsReducer } from './driverDetails.reducer';


const rootReducer = combineReducers({
  users,changeState,riderReducer,riderDetailsReducer,driverDetailsReducer,driverListReducer
});

export default rootReducer;

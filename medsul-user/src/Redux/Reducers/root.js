import { combineReducers } from 'redux'
import ServiceReducer from './service';
import TinhThanhReducer from './tinhThanh';


const RootReducer = combineReducers({
    service: ServiceReducer,
    tinhThanh: TinhThanhReducer
})

export default RootReducer;


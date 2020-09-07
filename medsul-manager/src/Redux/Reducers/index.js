import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DichVuReducer from './DichVuReducer';

const RootReducer = combineReducers({
    isLogin: LoginReducer,
    qlDichVu: DichVuReducer,
});

export default RootReducer;
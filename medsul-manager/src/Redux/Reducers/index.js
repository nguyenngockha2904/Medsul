import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DichVuReducer from './DichVuReducer';
import DieuDuongReducer from './DieuDuongReducer';
const RootReducer = combineReducers({
    isLogin: LoginReducer,
    qlDichVu: DichVuReducer,
    qlDieuDuong: DieuDuongReducer
});

export default RootReducer;
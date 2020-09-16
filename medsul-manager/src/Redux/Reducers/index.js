import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DichVuReducer from './DichVuReducer';
import DieuDuongReducer from './DieuDuongReducer';
import TinhThanhReducer from './TinhThanhReducer';
const RootReducer = combineReducers({
    credentials: LoginReducer,
    qlDichVu: DichVuReducer,
    qlDieuDuong: DieuDuongReducer,
    qlTinhThanh: TinhThanhReducer,
});

export default RootReducer;
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DichVuReducer from './DichVuReducer';
import DieuDuongReducer from './DieuDuongReducer';
import TinhThanhReducer from './TinhThanhReducer';
import ManagerReducer from './ManagerReducer';
import DonHangReducer from './DonHangReducer';
const RootReducer = combineReducers({
    credentials: LoginReducer,
    qlDichVu: DichVuReducer,
    qlDieuDuong: DieuDuongReducer,
    qlTinhThanh: TinhThanhReducer,
    qlManager: ManagerReducer,
    qlDonHang: DonHangReducer
});

export default RootReducer;
import { createAction } from '.';
import { DonHang } from '../../Services';
import { SET_DATA_LIST_DONHANG } from './type';

export const layDanhSachDonHang = () => {
    return dispatch => {
        DonHang.getAllDongHang().then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_LIST_DONHANG, res.data));

        }).catch(err => {
            console.log(err);
        })
    }
}
import { createAction } from '.';
import { TinhThanh } from '../../Services/index';
import { SET_DATA_TINHTHANH } from './type';

export const LayDanhSachTinhThanh = () => {
    return dispatch => {
        TinhThanh.fetchDanhSachTinhThanh().then(res => {
            console.log(res.data);
            dispatch(createAction(SET_DATA_TINHTHANH, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
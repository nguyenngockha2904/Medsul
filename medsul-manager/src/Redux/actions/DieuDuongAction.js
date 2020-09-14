import { createAction } from '.';
import { DieuDuong } from '../../Services/index';
import { SET_DATA_LISTDIEUDUONG } from './type';

export const LayDanhSachDieuDuong = () => {
    return dispatch => {
        DieuDuong.fetchDanhSachDieuDuong().then(res => {
            console.log(res.data);
            dispatch(createAction(SET_DATA_LISTDIEUDUONG, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
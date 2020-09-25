import { createAction } from './';
import { TinhThanh } from '../../services';
import { FETCH_TINHTHANH } from './type';
export const getAllListTinhThanh = () => {
    return dispatch => {
        TinhThanh.fetchDataListTinhThanh().then(res => {
            dispatch(createAction(FETCH_TINHTHANH, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
import { createAction } from '.';
import { TinhThanh } from '../../Services/index';
import { SET_DATA_TINHTHANH, ADD_TINHTHANH, UPDATE_TINHTHANH, HIRE_MODAL_TINHTHANH } from './type';
import swal from 'sweetalert';
import { Callbacks } from 'jquery';

export const LayDanhSachTinhThanh = () => {
    return dispatch => {
        TinhThanh.fetchDanhSachTinhThanh().then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_TINHTHANH, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const themTinhThanh = (value, Callback) => {
    return dispatch => {
        TinhThanh.addTinhThanh(value).then(res => {
            // console.log(res.data);
            dispatch(createAction(ADD_TINHTHANH, res.data));
            Callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const capNhapTinhThanh = (id, value) => {
    return dispatch => {
        TinhThanh.updateTinhThanh(id, value).then(res => {
            // console.log(res.data);
            dispatch(createAction(UPDATE_TINHTHANH, res.data));
            dispatch(createAction(HIRE_MODAL_TINHTHANH, false));

        }).catch(err => {
            console.log(err);
        })
    }
}
import Axios from 'axios';
import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU } from './type';

export const layDanhSachLoaiDichVuAction = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/loaiDichVu',
        }).then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_LOAIDICHVU,
                payload: res.data
            })

        }).catch(err => {
            console.log(err);
        })
    }
}

export const layDanhSachDichVuAction = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/dichvu'
        }).then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_DICHVU,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}
export const ThemLoaiDichVuMoi = (value) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/loaiDichVu',
            data: value
        }).then(res => {
            console.log(res.data);
            dispatch({
                type: ADD_LOAIDICHVU,
                payload: value
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
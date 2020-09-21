import Axios from 'axios';
import { createAction } from '.';
import { SET_LOGIN } from './type';

export const Login = (username, password, callbackThanhCong, callbackThatBai) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://localhost:8080/api/admin/login/${username}/${password}`,
        }).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_LOGIN, res.data));
            callbackThanhCong(res.data.admin_HOTEN, res.data.admin_CHUCVU);
        }).catch(err => {
            // console.log(err);
            callbackThatBai();
        })
    }
}
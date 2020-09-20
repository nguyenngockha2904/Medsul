import Axios from 'axios';
import { createAction } from '.';
import { SET_LOGIN } from './type';

export const Login = (username, password, callback) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://localhost:8080/api/admin/login/${username}/${password}`,
        }).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_LOGIN, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
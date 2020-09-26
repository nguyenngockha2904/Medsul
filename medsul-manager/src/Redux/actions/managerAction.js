import { createAction } from '.';
import { Manager } from '../../Services';
import { ADD_MANAGER, SET_DATA_LIST_MANAGER, SET_LOGIN, UPDATE_MANAGER } from './type';

export const LayDanhSachManager = () => {
    return dispatch => {
        Manager.fetchDanhSachManager().then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_LIST_MANAGER, res.data));
        }).catch(err => { console.log(err) });
    };
}

export const themManager = (value, callback) => {
    return dispatch => {
        Manager.addNewManager(value).then(res => {
            // console.log(res.data);
            dispatch(createAction(ADD_MANAGER, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}

export const capNhatManager = (id, value, callback, role = 0) => {
    return dispatch => {
        Manager.updateManager(id, value).then(res => {
            // console.log(res);
            dispatch(createAction(UPDATE_MANAGER, res.data));
            // dispatch(createAction(SET_LOGIN, res.data));
            // role ===1 modal tai khoan
            if (role === 1) {
                dispatch(createAction(SET_LOGIN, res.data));
            }
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
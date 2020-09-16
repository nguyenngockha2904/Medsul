import { createAction } from '.';
import { DieuDuong } from '../../Services/index';
import { ADD_DIEUDUONG, SET_DATA_LISTDIEUDUONG, SET_DIEUDUONG_BY_DAOTAOVIEN } from './type';

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

export const themDieuDuong = (value) => {
    return dispatch => {
        DieuDuong.addDieuDuong(value).then(res => {
            console.log(res.data);
            dispatch(createAction(ADD_DIEUDUONG, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const layListDieuDuongByIdDaoTao = (idDaoTao) => {
    return dispatch => {
        DieuDuong.getDieuDuongByID_DaoTao(idDaoTao).then(res => {
            console.log(res.data);
            dispatch(createAction(SET_DIEUDUONG_BY_DAOTAOVIEN, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
import { createAction } from '.';
import { DieuDuong } from '../../Services/index';
import { ADD_DIEUDUONG, HIRE_MODAL_DIEUDUONG, SET_DATA_LISTDIEUDUONG, SET_DIEUDUONG_BY_DAOTAOVIEN, UPDATE_DIEUDUONG } from './type';
import swal from 'sweetalert';
export const LayDanhSachDieuDuong = () => {
    return dispatch => {
        DieuDuong.fetchDanhSachDieuDuong().then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_LISTDIEUDUONG, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const themDieuDuong = (value) => {
    return dispatch => {
        DieuDuong.addDieuDuong(value).then(res => {
            // console.log(res.data);
            dispatch(createAction(ADD_DIEUDUONG, res.data));
            swal({
                title: "Thành Công!",
                text: "Bạn đã thêm một điều dưỡng mới!",
                icon: "success",
                button: "Ok!",
            });
            dispatch(createAction(HIRE_MODAL_DIEUDUONG, false));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const capNhapDieuDuong = (id, value) => {
    return dispatch => {
        DieuDuong.updateDieuDuong(id, value).then(res => {
            // console.log(res.data);
            dispatch(createAction(UPDATE_DIEUDUONG, res.data));
            dispatch(createAction(HIRE_MODAL_DIEUDUONG, false));

        }).catch(err => {
            console.log(err);
        })
    }
}

export const layListDieuDuongByIdDaoTao = (idDaoTao) => {
    return dispatch => {
        DieuDuong.getDieuDuongByID_DaoTao(idDaoTao).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DIEUDUONG_BY_DAOTAOVIEN, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
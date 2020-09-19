import { createAction } from '.';
import { DieuDuong, GPHN } from '../../Services/index';
import { ADD_DIEUDUONG, ADD_GIAYPHEPHANHNGHE, HIRE_MODAL_DIEUDUONG, SET_DATA_LISTDIEUDUONG, SET_DATA_LISTGPHN, SET_DIEUDUONG_BY_DAOTAOVIEN, SET_LISTGPHN_BY_DIEUDUONGID, UPDATE_DIEUDUONG, UPDATE_GIAYPHEPHANHNGHE } from './type';
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
            console.log(res.data);
            dispatch(createAction(SET_DIEUDUONG_BY_DAOTAOVIEN, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const layListAllGPHN = () => {
    return dispatch => {
        GPHN.getALlGPHN().then(res => {
            dispatch(createAction(SET_DATA_LISTGPHN, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const layListGPHNByIdDieuDuong = (idDD) => {
    return dispatch => {
        GPHN.getGiayPhepHanhNgheByDieuDuongId(idDD).then(res => {
            console.log(res.data);
            dispatch(createAction(SET_LISTGPHN_BY_DIEUDUONGID, res.data));
        }).catch(err => { console.log(err) });
    }
}

export const themGPHN = value => {
    return dispatch => {
        GPHN.addGiayPhepHanhNghe(value).then(res => {
            swal({
                title: "Thành Công!",
                text: "Bạn đã thêm một giấy phép hành nghề mới!",
                icon: "success",
                button: "Ok!",
            });
            dispatch(createAction(ADD_GIAYPHEPHANHNGHE, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const capNhatGPHN = (id, value) => {
    return dispatch => {
        GPHN.updateGiayPhepHanhNghe(id, value).then(res => {
            dispatch(createAction(UPDATE_GIAYPHEPHANHNGHE, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
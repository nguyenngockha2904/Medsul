
import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU, UPDATE_LOAIDICHVU, ADD_DICHVU, DELETE_DICHVU, UPDATE_DICHVU, SET_DATA_QUYTRINHDICHVUBYID } from './type';
import swal from 'sweetalert';
import { DichVu, LoaiDichVu, QuyTrinhDichVu } from '../../Services';
import { createAction } from '../../Redux/actions';

/**Loại Dịch Vụ */


export const layDanhSachLoaiDichVuAction = () => {
    return dispatch => {
        LoaiDichVu.fetchLoaiDichVu().then(res => {
            // console.log(res.data);
            dispatch({
                type: FETCH_LOAIDICHVU,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const ThemLoaiDichVuMoi = (value, callback) => {
    return dispatch => {
        LoaiDichVu.addLoaiDichVu(value).then(res => {
            // console.log('Xóa Thành công');
            dispatch({
                type: ADD_LOAIDICHVU,
                payload: res.data
            })

            callback();
        }).catch(err => {
            console.log('Lỗi');
        })
    }
}
export const CapNhatLoaiDichVu = (id, value) => {
    return dispatch => {
        LoaiDichVu.updateLoaiDichVu(id, value).then(res => {
            // console.log(res.data);
            dispatch({
                type: UPDATE_LOAIDICHVU,
                payload: res.data
            })

        }).catch(err => {
            console.log(err);
        })
    }
}


/**Dịch vụ */

export const layDanhSachDichVuAction = () => {
    return dispatch => {
        DichVu.fetchDichVu().then(res => {
            // console.log(res.data);
            dispatch({
                type: FETCH_DICHVU,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export const ThemDichVuMoi = (value, callback) => {
    return dispatch => {
        DichVu.addDichVu(value).then(res => {
            // console.log('value:', value);
            dispatch({
                type: ADD_DICHVU,
                payload: res.data
            })
            callback();
            // console.log('res.data:', res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const XoaDichVu = (id) => {
    return dispatch => {
        DichVu.deleleDichVu(id).then(res => {
            // console.log(res.data);
            dispatch({
                type: DELETE_DICHVU,
                payload: id
            });

        }).catch(err => {
            console.log(err);
        })
    }
}

export const CapNhatDichVu = (id, value, callback) => {
    return dispatch => {
        DichVu.updateDichVu(id, value).then(res => {
            console.log(res.data);
            dispatch({
                type: UPDATE_DICHVU,
                payload: res.data
            })
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}

export const LayDanhSachQuyTrinhDichVuByIdDichVu = id => {
    return dispatch => {
        QuyTrinhDichVu.getQuyTrinhDichVuByID(id).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_QUYTRINHDICHVUBYID, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
import { HIRE_MODAL_DIEUDUONG, HIRE_MODAL_GIAYPHEPHANHNGHE, HIRE_MODAL_VITIEN, SHOW_MODAL_DIEUDUONG, SHOW_MODAL_VITIEN, SHOW_MODAL_GIAYPHEPHANHNGHE, SET_DATA_LISTDIEUDUONG, ADD_DIEUDUONG, SET_DIEUDUONG_BY_DAOTAOVIEN, UPDATE_DIEUDUONG, SET_LISTGPHN_BY_DIEUDUONGID, CHECK_DAOTAOVIEN, SET_DATA_LISTGPHN } from "../actions/type";

let initialState = {
    modalDieuDuong: {
        isShow: false,
        value: {},
        role: 1, //1 thêm //2 xem //3 sửa
    },
    modalGiayPhepHanhNghe: {
        isShow: false,
        value: {},
        listGiayPhepHanhNgheByDieuDuongId: [],
    },
    modalViTien: {
        isShow: false,
        value: {},
    },
    listDieuDuong: [],
    listDieuDuongByIdDaoTao: '',
    listAllGPHN: [],
    checkExist: false,
}
const dieuDuongReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HIRE_MODAL_DIEUDUONG: {
            state.modalDieuDuong.isShow = false;
            return { ...state }
        }
        case HIRE_MODAL_GIAYPHEPHANHNGHE: {
            state.modalGiayPhepHanhNghe.isShow = false;
            return { ...state }
        }
        case HIRE_MODAL_VITIEN: {
            state.modalViTien.isShow = false;
            return { ...state }
        }
        case SHOW_MODAL_DIEUDUONG: {
            state.modalDieuDuong.isShow = true;
            state.modalDieuDuong.value = payload.value;
            state.modalDieuDuong.role = payload.role;
            return { ...state }
        }
        case SHOW_MODAL_GIAYPHEPHANHNGHE: {
            state.modalGiayPhepHanhNghe.isShow = true;
            state.modalGiayPhepHanhNghe.value = payload;
            return { ...state }
        }
        case SHOW_MODAL_VITIEN: {
            state.modalViTien.isShow = true;
            state.modalViTien.value = payload;
            return { ...state }
        }
        case SET_DATA_LISTDIEUDUONG: {
            state.listDieuDuong = payload;
            return { ...state };
        } case ADD_DIEUDUONG: {
            state.listDieuDuong = [...state.listDieuDuong, payload];
            return { ...state };
        } case SET_DIEUDUONG_BY_DAOTAOVIEN: {
            state.listDieuDuongByIdDaoTao = payload;
            return { ...state };
        } case UPDATE_DIEUDUONG: {
            let index = state.listDieuDuong.findIndex(dd => dd.dieuDuong_Id === payload.dieuDuong_Id);
            if (index !== -1) {
                let mangmoi = [...state.listDieuDuong];
                mangmoi[index] = payload;
                state.listDieuDuong = mangmoi;
            }
            return { ...state };
        } case SET_DATA_LISTGPHN: {
            state.listAllGPHN = payload;
            return { ...state };
        } case SET_LISTGPHN_BY_DIEUDUONGID: {
            state.modalGiayPhepHanhNghe.listGiayPhepHanhNgheByDieuDuongId = payload;
            return { ...state };
        } case CHECK_DAOTAOVIEN: {
            let index = state.listAllGPHN.findIndex(gphn => gphn.giayPhep_DaoTaoVien_Id === payload);
            if (index === -1) {
                state.checkExist = false;
            } else {
                state.checkExist = true;
            }
            return { ...state };
        }
        default: {
            return state;
        }
    }
}

export default dieuDuongReducer;
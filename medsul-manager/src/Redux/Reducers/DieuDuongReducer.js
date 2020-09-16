import { HIRE_MODAL_DIEUDUONG, HIRE_MODAL_GIAYPHEPHANHNGHE, HIRE_MODAL_VITIEN, SHOW_MODAL_DIEUDUONG, SHOW_MODAL_VITIEN, SHOW_MODAL_GIAYPHEPHANHNGHE, SET_DATA_LISTDIEUDUONG, ADD_DIEUDUONG } from "../actions/type";

let initialState = {
    modalDieuDuong: {
        isShow: false,
        value: {},
        role: 1, //1 thêm //2 xem //3 sửa
    },
    modalGiayPhepHanhNghe: {
        isShow: false,
        value: {},
    },
    modalViTien: {
        isShow: false,
        value: {},
    },
    listDieuDuong: [],

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
        }
        default: {
            return state;
        }
    }
}

export default dieuDuongReducer;
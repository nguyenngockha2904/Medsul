import { HIRE_MODAL_DIEUDUONG, HIRE_MODAL_GIAYPHEPHANHNGHE, HIRE_MODAL_VITIEN, SHOW_MODAL_DIEUDUONG, SHOW_MODAL_VITIEN, SHOW_MODAL_GIAYPHEPHANHNGHE } from "../actions/type";

let initialState = {
    modalDieuDuong: {
        isShow: false,
        value: {},
    },
    modalGiayPhepHanhNghe: {
        isShow: false,
        value: {},
    },
    modalViTien: {
        isShow: false,
        value: {},
    }

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
            state.modalDieuDuong.value = payload;
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
        default: {
            return state;
        }
    }
}

export default dieuDuongReducer;
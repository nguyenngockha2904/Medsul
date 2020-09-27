import { HIRE_MODAL_DONHANG, SET_DATA_LIST_DONHANG, SHOW_MODAL_DONHANG } from "../actions/type";

let initialState = {
    listDonHang: [],
    modalDonHang: {
        isShow: false,
        value: {},
        role: 1, //1 thêm //2 xem //3 sửa
    }
}

const qlDonHangReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA_LIST_DONHANG: {
            state.listDonHang = payload;
            return { ...state };
        }
        case SHOW_MODAL_DONHANG: {
            state.modalDonHang.isShow = true;
            state.modalDonHang.value = payload.value;
            state.modalDonHang.role = payload.role;
            return { ...state };
        }
        case HIRE_MODAL_DONHANG: {
            state.modalDonHang.isShow = false;
            return { ...state }
        }
        default: {
            return state;
        }
    }
}
export default qlDonHangReducer;
import { SET_DATA_TINHTHANH, SHOW_MODAL_TINHTHANH, HIRE_MODAL_TINHTHANH, ADD_TINHTHANH, UPDATE_TINHTHANH, CHECK_EXIST_MA_TINHTHANH } from "../actions/type";

let initialState = {
    listTinhThanh: [],
    modalTinhThanh: {
        isShow: false,
        value: {},
        role: 1 //1 thêm //2 xem //3 sửa
    },
    isExistTT: false,
}

const TinhThanhReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA_TINHTHANH: {
            state.listTinhThanh = payload;
            return { ...state };
        } case SHOW_MODAL_TINHTHANH: {
            state.modalTinhThanh.isShow = true;
            state.modalTinhThanh.value = payload.value;
            state.modalTinhThanh.role = payload.role;
            return { ...state }
        } case HIRE_MODAL_TINHTHANH: {
            state.modalTinhThanh.isShow = false;
            state.modalTinhThanh.value = payload.value;
            return { ...state }
        } case ADD_TINHTHANH: {
            state.listTinhThanh = [...state.listTinhThanh, payload];
            return { ...state }
        } case UPDATE_TINHTHANH: {
            let index = state.listTinhThanh.findIndex(tt => tt.tinhThanh_Id === payload.tinhThanh_Id);
            if (index !== -1) {
                let mangmoi = [...state.listTinhThanh];
                mangmoi[index] = payload;
                state.listTinhThanh = mangmoi;
            }
            return { ...state };
        } case CHECK_EXIST_MA_TINHTHANH: {
            let index = state.listTinhThanh.findIndex(dv => dv.maTinhThanh.toLowerCase() === payload.toLowerCase());
            if (index === -1) {
                state.isExistTT = false;
            } else {
                state.isExistTT = true;
            }
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default TinhThanhReducer;
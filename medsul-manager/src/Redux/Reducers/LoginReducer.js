import { HIRE_MODAL_THONGTINCANHAN, SET_LOGIN, SHOW_MODAL_REPASSWORD, SHOW_MODAL_THONGTINCANHAN, HIRE_MODAL_REPASSWORD } from '../actions/type';
let initialState = {
    isLogin: false,
    modalThongTinCaNhan: {
        isShow: false,
        value: {}
    },
    modalRePassword: {
        isShow: false,
        value: {},
    }
};

const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN: {
            state.isLogin = payload;
            return { ...state }
        }
        case SHOW_MODAL_THONGTINCANHAN: {
            state.modalThongTinCaNhan.isShow = true;
            state.modalThongTinCaNhan.value = payload;
            return { ...state }
        } case HIRE_MODAL_THONGTINCANHAN: {
            state.modalThongTinCaNhan.isShow = false;
            return { ...state }
        } case SHOW_MODAL_REPASSWORD: {
            state.modalRePassword.isShow = true;
            state.modalRePassword.value = payload;
            return { ...state }
        } case HIRE_MODAL_REPASSWORD: {
            state.modalRePassword.isShow = false;
            return { ...state }
        }
        default:
            return state;
    }
}

export default LoginReducer;
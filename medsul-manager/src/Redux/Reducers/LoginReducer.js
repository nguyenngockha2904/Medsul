import { HIRE_MODAL_THONGTINCANHAN, SET_LOGIN, SHOW_MODAL_REPASSWORD, SHOW_MODAL_THONGTINCANHAN, HIRE_MODAL_REPASSWORD, LOGOUT } from '../actions/type';
let initialState = {
    credentials: {
        isLogin: false,
        value: {},
    },

    modalThongTinCaNhan: {
        isShow: false,
        value: {}
    },

    modalRePassword: {
        isShow: false,
        value: {},
        type: 2, //1 điều dưỡng //2 là admin manager
    }
};

const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN: {
            state.credentials.isLogin = true;
            state.credentials.value = payload;
            return { ...state }
        } case LOGOUT: {
            state.credentials.isLogin = false;
            state.credentials.value = payload;
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
            state.modalRePassword.value = payload.value;
            state.modalRePassword.type = payload.type;
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
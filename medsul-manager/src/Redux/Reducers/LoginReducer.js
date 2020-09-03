import { SET_LOGIN } from '../actions/type';
let initialState = true;

const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN:
            return payload;
            break;
        default:
            return state;
    }
}

export default LoginReducer;
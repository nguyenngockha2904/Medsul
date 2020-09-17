import { HIRE_MODAL_MANAGER, SHOW_MODAL_MANAGER } from "../actions/type";

let initialState = {
    modalManager: {
        isShow: false,
        value: {}
    }

}


const ManagerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL_MANAGER: {
            state.modalManager.isShow = true;
            state.modalManager.value = payload;
            return { ...state };
        } case HIRE_MODAL_MANAGER: {
            state.modalManager.isShow = false;
            return { ...state };
        }

        default: {
            return state;
        }
    }
}
export default ManagerReducer;
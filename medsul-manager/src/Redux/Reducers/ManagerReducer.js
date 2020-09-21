import { ADD_MANAGER, HIRE_MODAL_MANAGER, SET_DATA_LIST_MANAGER, SHOW_MODAL_MANAGER, UPDATE_MANAGER } from "../actions/type";

let initialState = {
    modalManager: {
        isShow: false,
        value: {},
        role: 1, //1 thêm //2 xem //3 sửa
    },
    listAllManager: [],
    checkExistSDT: false,
    checkExistCMND: false,
    checkExistEmail: false,
}


const ManagerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL_MANAGER: {
            state.modalManager.isShow = true;
            state.modalManager.value = payload.value;
            state.modalManager.role = payload.role;
            return { ...state };
        } case HIRE_MODAL_MANAGER: {
            state.modalManager.isShow = false;
            return { ...state };
        } case SET_DATA_LIST_MANAGER: {
            state.listAllManager = payload;
            return { ...state };
        } case ADD_MANAGER: {
            state.listAllManager = [...state.listAllManager, payload];
            return { ...state };
        } case UPDATE_MANAGER: {
            let index = state.listAllManager.findIndex(mn => mn.admin_ID === payload.admin_ID);
            if (index !== -1) {
                let mangTam = [...state.listAllManager];
                mangTam[index] = payload;
                state.listAllManager = mangTam;
            }
            return { ...state };
        }

        default: {
            return state;
        }
    }
}
export default ManagerReducer;
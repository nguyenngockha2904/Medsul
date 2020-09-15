import { SET_DATA_TINHTHANH } from "../actions/type";

let initialState = {
    listTinhThanh: [],
}

const TinhThanhReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA_TINHTHANH: {
            state.listTinhThanh = payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default TinhThanhReducer;
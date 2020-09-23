import { SET_DATA_LIST_DONHANG } from "../actions/type";

let initialState = {
    listDonHang: [],
}

const qlDonHangReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA_LIST_DONHANG: {
            state.listDonHang = payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default qlDonHangReducer;
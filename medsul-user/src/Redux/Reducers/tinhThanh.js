import { FETCH_TINHTHANH } from '../action/type';

let initialState = {
    listTinhThanh: [],
}

const TinhThanhReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TINHTHANH: {
            state.listTinhThanh = payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default TinhThanhReducer;
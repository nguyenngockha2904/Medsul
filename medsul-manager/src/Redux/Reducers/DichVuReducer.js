import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU } from "../actions/type";

let initialState = {
    mangLoaiDichVu: [

    ],
    mangDichVu: [

    ],
}

const DichVuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_LOAIDICHVU: {
            state.mangLoaiDichVu = [...payload];
            return { ...state };
        }
        case FETCH_DICHVU: {
            state.mangDichVu = [...payload];
            return { ...state };
        } case ADD_LOAIDICHVU: {
            state.mangLoaiDichVu = [...state.mangLoaiDichVu, payload];
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default DichVuReducer;
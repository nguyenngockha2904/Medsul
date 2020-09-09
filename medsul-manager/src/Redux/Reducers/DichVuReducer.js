import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU, SHOW_MODAL_DICHVU, HIRE_MODAL_DICHVU, SHOW_MODAL_LOAIDICHVU, HIRE_MODAL_LOAIDICHVU, DELETE_LOAIDICHVU, UPDATE_LOAIDICHVU, DROPDOWN_TABLE_DICHVU } from "../actions/type";

let initialState = {
    modalLoaiDV: {
        isShow: false,
        value: {
            loaiDichVu_Id: '',
            maLoaiDichVu: '',
            tenLoaiDichVu: ''
        }
    },
    dropDown_MaLDV: '',
    mangLoaiDichVu: [

    ],
    modalDV: {
        isShow: false,
        value: {
            dichVu_Id: 0,
            khongBaoGom: '',
            loaiDichVuID: 0,
            maDichVu: '',
            moTaDichVu: '',
            tenDichVu: '',
            thoiGianUocTinh: 0,
            yeuCauCongViec: ''
        }
    },
    mangDichVu: [

    ],
}

const DichVuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL_DICHVU: {
            state.modalDV.isShow = true;
            state.modalDV.value = payload;
            return { ...state };
        } case HIRE_MODAL_DICHVU: {
            state.modalDV.isShow = false;
            return { ...state };
        } case SHOW_MODAL_LOAIDICHVU: {
            console.log(payload);
            state.modalLoaiDV.isShow = true;
            state.modalLoaiDV.value = payload;
            return { ...state };
        } case HIRE_MODAL_LOAIDICHVU: {
            state.modalLoaiDV.isShow = false;
            return { ...state };
        } case FETCH_LOAIDICHVU: {
            state.mangLoaiDichVu = [...payload];
            return { ...state };
        } case FETCH_DICHVU: {
            state.mangDichVu = [...payload];
            return { ...state };
        } case ADD_LOAIDICHVU: {
            state.mangLoaiDichVu = [...state.mangLoaiDichVu, payload];
            return { ...state };
        } case DELETE_LOAIDICHVU: {
            let mangLoaiDichVumoi = [...state.mangLoaiDichVu];
            let index = mangLoaiDichVumoi.findIndex(ldv => ldv.id === payload);
            mangLoaiDichVumoi.splice(index, 1);
            state.mangLoaiDichVu = mangLoaiDichVumoi;
            return { ...state };
        } case UPDATE_LOAIDICHVU: {
            let index = state.mangLoaiDichVu.findIndex(ldv => ldv.id === payload.loaiDichVu_Id);
            state.mangLoaiDichVu[index] = payload;
            return { ...state };
        } case DROPDOWN_TABLE_DICHVU: {
            state.dropDown_MaLDV = payload;
            return { ...state };

        }
        default: {
            return state;
        }
    }
}
export default DichVuReducer;
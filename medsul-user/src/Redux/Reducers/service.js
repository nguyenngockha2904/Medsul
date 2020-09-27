import { FETCH_SERVICE, FETCH_SERVICETYPE, SHOW_COMPONENT_SERVICE, HIRE_COMPONENT_SERVICE } from "../action/type";

let innitialState = {
    ListLDV: [],
    ListDV: [],
    componentService: {
        isShow: false,
        value: {},
    }
};

const ServiceReducer = (state = innitialState, action) => {
    switch (action.type) {
        case FETCH_SERVICETYPE: {
            state.ListLDV = action.payload;
            return { ...state }
        }

        case FETCH_SERVICE: {
            state.ListDV = action.payload;
            return { ...state }
        }
        case SHOW_COMPONENT_SERVICE: {
            state.componentService.isShow = true;
            state.componentService.value = action.payload;
            return { ...state };
        } case HIRE_COMPONENT_SERVICE: {
            state.componentService.isShow = false;
            state.componentService.value = action.payload;
            return { ...state };
        }
        default: return state;
    }
}

export default ServiceReducer;

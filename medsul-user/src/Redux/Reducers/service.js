import { FETCH_SERVICE, FETCH_SERVICETYPE } from "../action/type";

let innitialState = {
    ListLDV: [],
    ListDV: []
};

const ServiceReducer = (state = innitialState, action) => {
    switch (action.type) {
        case FETCH_SERVICETYPE: state.ListLDV = action.payload;
            return { ...state }

        case FETCH_SERVICE: state.ListDV = action.payload;
            return { ...state }

        default: return state;
    }
}

export default ServiceReducer;

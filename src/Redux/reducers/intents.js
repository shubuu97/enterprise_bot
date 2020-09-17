import * as actionTypes from "../actionTypes/intents";

const IntentsReducer = (state = {}, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case actionTypes.GET_INTENT_LIST_INIT:
            return { type, ...state, list: payload };
        case actionTypes.GET_INTENT_LIST_SUCCESS:
            return { type, ...state, list: payload };
        case actionTypes.GET_INTENT_LIST_FAIL:
            return { type, ...state, list: payload };
        case actionTypes.GET_INTENT_DETAIL_INIT:
            return { type, ...state, detail: payload };
        case actionTypes.GET_INTENT_DETAIL_SUCCESS:
            return { type, ...state, detail: payload };
        case actionTypes.GET_INTENT_DETAIL_FAIL:
            return { type, ...state, detail: payload };
        default:
            return state;
    }
};

export default IntentsReducer;

import * as actionTypes from "../actionTypes/auth";

const AuthReducer = (state = {}, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case actionTypes.LOGIN_USER_INIT:
            return { user: payload };
        case actionTypes.LOGIN_USER_SUCCESS:
            return { user: payload };
        case actionTypes.LOGIN_USER_FAIL:
            return { user: payload };
        default:
            return state;
    }
};

export default AuthReducer;

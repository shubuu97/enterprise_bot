import axios from "axios";
import * as actionTypes from "../actionTypes/auth";
import { loginDetails } from "../../constants";
import { BASE_URL, LOGIN } from "../../apis";
import { getIntentsList } from "./intent";

export const loginUser = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.LOGIN_USER_INIT,
            payload: {
                success: null,
            },
        });
        try {
            const response = await axios.post(`${BASE_URL}${LOGIN}`, loginDetails);
            const token = response?.data?.id ?? "";
            localStorage.setItem("token", token);
            dispatch({
                type: actionTypes.LOGIN_USER_SUCCESS,
                payload: {
                    ...(response?.data ?? {}),
                    success: true,
                },
            });
            dispatch(getIntentsList());
        } catch (err) {
            dispatch({
                type: actionTypes.LOGIN_USER_FAIL,
                payload: { success: false },
            });
        }
    };
};

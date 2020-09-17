import axios from "../../Utilities/axios";
import * as actionTypes from "../actionTypes/intents";
import { INTENTS_LIST, INTENT_DETAIL } from "../../apis";
import { agentId } from "../../constants";

export const getIntentsList = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.GET_INTENT_LIST_INIT,
            payload: {
                success: null,
            },
        });
        try {
            const response = await axios(INTENTS_LIST, {
                params: {
                    filter: {
                        limit: 20,
                        skip: 0,
                        where: { agentId },
                    },
                },
            });
            dispatch({
                type: actionTypes.GET_INTENT_LIST_SUCCESS,
                payload: {
                    data: [...(response?.data ?? [])],
                    success: true,
                },
            });
        } catch (err) {
            dispatch({
                type: actionTypes.GET_INTENT_LIST_FAIL,
                payload: { success: false },
            });
        }
    };
};

export const getIntentDetail = (intentId) => {
    if (intentId) {
        return async (dispatch) => {
            dispatch({
                type: actionTypes.GET_INTENT_DETAIL_INIT,
                payload: {
                    success: null,
                    loading: true,
                },
            });
            try {
                const response = await axios(INTENT_DETAIL, {
                    params: {
                        intentId: "5e8abde8e440a70d17d06e53",
                        skipLimit: {
                            limit: 20,
                            skip: 0,
                            order: "id DESC",
                        },
                    },
                });
                dispatch({
                    type: actionTypes.GET_INTENT_DETAIL_SUCCESS,
                    payload: {
                        ...(response?.data ?? {}),
                        loading: false,
                        success: true,
                    },
                });
            } catch (err) {
                dispatch({
                    type: actionTypes.GET_INTENT_DETAIL_FAIL,
                    payload: { loading: false, success: false },
                });
            }
        };
    }
};

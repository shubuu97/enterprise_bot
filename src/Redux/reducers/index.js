import { combineReducers } from "redux";

import AuthReducer from "../reducers/auth";
import IntentsReducer from "../reducers/intents";

export default combineReducers({
    auth: AuthReducer,
    intents: IntentsReducer,
});

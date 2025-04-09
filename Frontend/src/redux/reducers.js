import { combineReducers } from "redux"
import userReducer from "./slice/userSlice"
import commonReducer from "./slice/commonSlice"

const rootReducer = combineReducers({
    user: userReducer,
    common:commonReducer
});

export default rootReducer;
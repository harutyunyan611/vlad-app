import { combineReducers } from "redux";
import { profilesReducer } from "./profilesReducer";

export const rootReducer = combineReducers({
    user: profilesReducer,
})
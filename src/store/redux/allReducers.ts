import { combineReducers } from "@reduxjs/toolkit";
import { UserDataReducer } from "./reducers/UserDataReducer";

export const allReducers = combineReducers({
    userData: UserDataReducer
})
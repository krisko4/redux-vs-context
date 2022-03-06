import { configureStore, createStore } from "@reduxjs/toolkit";
import { allReducers } from "./redux/allReducers";
import { userDataReducer } from "./redux_toolkit/slices/userDataSlice";

export const store = configureStore({
    reducer:{
        userData: userDataReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

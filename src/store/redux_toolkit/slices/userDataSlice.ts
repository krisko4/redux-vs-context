import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserData {
    name: string,
    surname: string
}

const initialState : UserData = {
    name: '',
    surname: ''
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<typeof initialState>) => {
            state.name = action.payload.name
            state.surname = action.payload.surname
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload
        },

    }
})

export const selectName = (state: RootState) => state.userData.name
export const selectSurname = (state: RootState) => state.userData.surname
export const selectUserData = (state : RootState) => state.userData
export const {setName, setSurname} = userDataSlice.actions
export const {setUserData} = userDataSlice.actions
export const userDataReducer =  userDataSlice.reducer
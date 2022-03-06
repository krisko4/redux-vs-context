import React, { FC } from "react"
import { useAppDispatch } from "../../../store/redux_toolkit/hooks"
import { setName, setSurname } from "../../../store/redux_toolkit/slices/userDataSlice"
export const UserForm: FC = () => {

    const dispatch = useAppDispatch()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value))
    }

    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSurname(e.target.value))
    }

    return (
        <>
            <input style={{ marginBottom: 10 }} placeholder="Enter your name" onChange={handleNameChange} type="text" />
            <input placeholder="Enter your surname" onChange={handleSurnameChange} type="text" />
        </>
    )
}
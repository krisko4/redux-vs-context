import React, { FC } from "react"
import { useUserDataContext } from "../../../contexts/UserDataContext"
export const UserForm: FC = () => {

    const { setName, setSurname } = useUserDataContext()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value)
    }

    return (
        <>
            <input style={{ marginBottom: 10 }} placeholder="Enter your name" onChange={handleNameChange} type="text" />
            <input placeholder="Enter your surname" onChange={handleSurnameChange} type="text" />
        </>
    )
}
import { FC, useRef } from "react"
import { useUserDataContext } from "../../../contexts/UserDataContext"

export const Name: FC = () => {
    const { name } = useUserDataContext()
    const nameRenders = useRef(0)
    
    return (
        <div>
            <p>name : {name}</p>
            <div>renders : {nameRenders.current++}</div>
        </div>
    )
}
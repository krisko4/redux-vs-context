import { FC, useRef } from "react"
import { useUserDataContext } from "../../../contexts/UserDataContext"

export const Surname: FC = () => {
    const { surname} = useUserDataContext()
    const renders = useRef(0)
    return (
        <>
            <p>surname : {surname}</p>
            <p>renders : {renders.current++}</p>
        </>
    )
}
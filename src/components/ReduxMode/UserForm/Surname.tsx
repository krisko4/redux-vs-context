import { FC, useRef } from "react"
import { useSelector } from "react-redux"
import { selectSurname } from "../../../store/redux_toolkit/slices/userDataSlice"

export const Surname: FC = () => {
    const surname = useSelector(selectSurname)
    const renders = useRef(0)
    console.log('yea')
    return (
        <>
            <p>surname : {surname}</p>
            <p>renders : {renders.current++}</p>
        </>
    )
}
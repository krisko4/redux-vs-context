import { FC, useRef } from "react"
import { useSelector } from "react-redux"
import { selectName } from "../../../store/redux_toolkit/slices/userDataSlice"

export const Name: FC = () => {
    const name = useSelector(selectName)
    const renders = useRef(0)
    return (
        <div>
            <p>name : {name}</p>
            <div>renders : {renders.current++}</div>
        </div>
    )
}
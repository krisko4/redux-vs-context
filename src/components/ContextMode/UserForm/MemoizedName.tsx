import React, { FC, useRef } from "react";
interface Props {
    name: string
}
const Name: FC<Props> = ({ name }) => {
    const renders = useRef(0)
    return (
        <div>
            <p>name : {name}</p>
            <div>renders : {renders.current++}</div>
        </div>
    )
}

export const MemoizedName = React.memo(Name)
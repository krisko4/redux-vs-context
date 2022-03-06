import React, { FC, useRef } from "react"

interface Props {
    surname: string
}
const Surname: FC<Props> = ({ surname }) => {
    const renders = useRef(0)
    console.log('yea')
    return (
        <>
            <p>surname : {surname}</p>
            <p>renders : {renders.current++}</p>
        </>
    )
}

export const MemoizedSurname = React.memo(Surname)
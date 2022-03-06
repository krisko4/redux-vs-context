import { FC, useState } from "react"
import { useUserDataContext } from "../../../contexts/UserDataContext"
import { MemoizedName } from "./MemoizedName"
import { MemoizedSurname } from "./MemoizedSurname"
import { Name } from "./Name"
import { Surname } from "./Surname"


export const UserData: FC = () => {
    const [memoizedMode, setMemoizedMode] = useState(false)
    const {name, surname} = useUserDataContext()

    const handleChange = () => {
        setMemoizedMode(!memoizedMode)
    }

    return (
        <div>
            {memoizedMode ?
                <>
                    <MemoizedName name={name}  />
                    <MemoizedSurname surname={surname} />
                </> :
                <>
                    <Name />
                    <Surname />
                </>
            }
            <input id="memo" type="checkbox" onChange={handleChange} checked={memoizedMode} />
            <label htmlFor="memo">Memoize</label>
        </div>
    )
}
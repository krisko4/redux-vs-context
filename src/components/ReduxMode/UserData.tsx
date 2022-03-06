import { FC } from "react"
import { Name } from "./UserForm/Name"
import { Surname } from "./UserForm/Surname"

export const UserData: FC = () => {
    return (
        <div>
            <Name/>
            <Surname/>
        </div>
    )
}
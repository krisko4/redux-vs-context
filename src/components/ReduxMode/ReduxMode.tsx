import { FC } from "react"
import { UserData } from "./UserData"
import { UserForm } from "./UserForm/UserForm"

export const ReduxMode: FC = () => {


    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>Redux mode</h2>
                <h3>In this mode only the component with value that is changed is rerendered.<br /> Changing name will not rerender surname component.</h3>
            </div>
            <UserForm />
            <UserData />
        </>
    )
}
import { FC } from "react"
import { UserDataContextProvider } from "../../contexts/UserDataContext"
import { UserData } from "./UserForm/UserData"
import { UserForm } from "./UserForm/UserForm"

export const ContextMode: FC = () => {
    return (
        <UserDataContextProvider>
            <div style={{textAlign: 'center'}}>
                <h2>Context mode</h2>
                <h3>In this mode both components inside the context are rerendered, even though only single field is changed.<br/>
                    Changing name will rerender surname component.
                </h3>
            </div>
            <UserForm />
            <UserData />
        </UserDataContextProvider>
    )
}
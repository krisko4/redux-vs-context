import { createContext, FC, useContext, useState } from "react";

const UserDataContext = createContext<ContextData | null>(null)

export const UserDataContextProvider: FC = ({ children }) => {
    const state = useProviderSettings()
    return (
        <UserDataContext.Provider value={state}>
            {children}
        </UserDataContext.Provider>
    )
}

const useProviderSettings = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    return {
        name,
        setName,
        surname,
        setSurname
    }
}

type ContextData = ReturnType<typeof useProviderSettings>

export const useUserDataContext = () => {
    const context = useContext(UserDataContext)
    if (!context) throw new Error('UserDataContext should be used inside Provider.')
    return context
}
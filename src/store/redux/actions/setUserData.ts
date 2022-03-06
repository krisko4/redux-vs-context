import { UserData } from "../../dataTypes"

export const setUserData = (userData: UserData) => {
    return {
        type: 'SET_USER_DATA',
        payload: userData
    }
}
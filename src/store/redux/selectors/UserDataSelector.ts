import { useSelector } from "react-redux";
import { RootState } from "../../dataTypes";

export const useUserDataSelector = () => useSelector((state: RootState) => state.userData)
import { AUTHOTIZATION_KEY } from "../constants/authorizationConstants";
import {  getItemStorage, removeItem, setItemStorage } from "./localStorageProxy";

export const unsetAuthorizationToken = () => removeItem(AUTHOTIZATION_KEY)

export const setAuthorizationToken = (token: string) => {
	if (token) {
		setItemStorage(AUTHOTIZATION_KEY, token)
	}
}
export const getAuthorizationToken = () => getItemStorage(AUTHOTIZATION_KEY)
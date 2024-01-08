import { User } from "../../modules/types/UserType";
import { AUTHOTIZATION_KEY } from "../constants/authorizationConstants";
import { getItemStorage, removeItem, setItemStorage } from "./localStorageProxy";
import { connectionAPIGet } from "./connectionAPI";

export const unsetAuthorizationToken = () => removeItem(AUTHOTIZATION_KEY)

export const setAuthorizationToken = (token: string) => {
	if (token) {
		setItemStorage(AUTHOTIZATION_KEY, token)
	}
}
export const getAuthorizationToken = () => getItemStorage(AUTHOTIZATION_KEY)

export const verifyLoggedIn = async (
	setUser: any,
	user?: User,
) => {
	if (!user) {
		await connectionAPIGet('http://localhost:3001/users/search').then((userReturn) => {
			setUser(userReturn)
		})
			.catch((error) => {
				unsetAuthorizationToken()
				location.href = '/login'
			})
	}
	return null
}
import { User } from "../types/UserType";
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

export const verifyLoggedIn = async (setUser: (user: User) => void, user?: User) => {
	const token = getAuthorizationToken()
	if (!token) {
		location.href = '/login'

	}
	if (!user) {
		await connectionAPIGet('http://localhost:3001/users/search').then((userReturn) => {
			console.log(userReturn.RESPONSE)
			setUser(userReturn.RESPONSE)
		})
			.catch((error) => {
				unsetAuthorizationToken()
				location.href = '/login'
			})
	}
	return null
}
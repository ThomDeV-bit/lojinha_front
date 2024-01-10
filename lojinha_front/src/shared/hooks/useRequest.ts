import { AxiosError } from "axios"
import { useState } from "react"
import { useGlobalContext } from "./useGlobal"
import { connectionAPIPost } from "../functions/connectionAPI"
import { setAuthorizationToken } from "../functions/auth"


export const useRequests = () => {

	const { setNotification, setUser } = useGlobalContext()
	const [load, setLoad] = useState(false)

	const postRequest = async (url: string, body: any) => {
		setLoad(true)

		const data = await connectionAPIPost(url, body)
			.then((result) => {
				setAuthorizationToken(result.RESPONSE.access_token)
				setUser(result.RESPONSE)
				setNotification('Entrando...', 'success')
				return result.RESPONSE?.access_token
			})
			.catch((error: AxiosError) => {
				setNotification(error?.message, 'error')
				return undefined
			})
		setLoad(false)

		return data
	}
	return {
		load,
		postRequest,
	}
}

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
				console.log(result.RESPONSE[0])
				setUser(result.RESPONSE[0])
				setAuthorizationToken(result?.RESPONSE[0].acess_token)
				setNotification('Entrando...', 'success')
				return result
			})
			.catch((error: AxiosError) => {
				setNotification(error?.message, 'error')
				return undefined
			})
		setLoad(false)
		
		return data?.RESPONSE[0].acess_token
	}
	return {
		load,
		postRequest,
	}
}

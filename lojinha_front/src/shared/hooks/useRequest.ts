import { AxiosError } from "axios"
import { useState } from "react"
import { useGlobalContext } from "./useGlobal"
import { connectionAPIPost } from "../functions/connectionAPI"

export const useRequests = () => {

	const { setNotification } = useGlobalContext()
	const [load, setLoad] = useState(false)

	const postRequest = async <T>(url: string, body: any): Promise<T | undefined> => {
		setLoad(true)

		const response = await connectionAPIPost<T>(url, body)
			.then((result) => {
				setNotification('Entrando...', 'success')
				return result
			})
			.catch((error: AxiosError) => {
				setNotification(error?.message, 'error')
				return undefined
			})
		setLoad(false)
		return response
	}
	return {
		load,
		postRequest,
	}
}
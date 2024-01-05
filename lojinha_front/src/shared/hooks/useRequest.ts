import axios, { AxiosError } from "axios"
import { useState } from "react"
import { useGlobalContext } from "./useGlobal"

export const useRequests = () => {
	const { setNotification } = useGlobalContext()
	const [load, setLoad] = useState(false)

	const getRequest = async (url: string, data: any) => {
		setLoad(true)
		try {
			const response = await axios(
				{
					method: 'POST',
					url,
					data
				}
			)
			setLoad(false)
			setNotification('Entrando', 'success')
			return response.data
		} catch (error: AxiosError | any) {
			setLoad(false)
			setNotification('Usuario e senha invalidos', 'error')
			alert(error?.response.data)
		}
	}
	return {
		load,
		getRequest,
	}
}
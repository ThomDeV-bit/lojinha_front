import axios, { AxiosError } from "axios"
import { useState } from "react"

export const useRequests = () => {

	const [load, setLoad] = useState(false)

	const getRequest = async (url: string, data: any) => {
		setLoad(true)
		return await axios(
			{
				method: 'POST',
				url,
				data
			}
		)
			.then((result) => {
				setLoad(false)
				console.log(result)
				return result.data
			})
			.catch((error: AxiosError) => {
				alert(error.response?.data)
			})
	}
	return {
		load,
		getRequest,
	}
}
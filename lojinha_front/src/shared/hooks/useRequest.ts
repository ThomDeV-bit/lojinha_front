import { AxiosError } from "axios"
import { useState } from "react"
import { useGlobalContext } from "./useGlobal"
import { connectionAPIGet, connectionAPIPost } from "../functions/connectionAPI"
import { setAuthorizationToken } from "../functions/auth"
import { ProductType } from "../types/ProductTyp"
import { useNavigate } from "react-router-dom"
import { ProductsRouterEnum } from "../../modules/products/routes"


export const useRequests = () => {
	const { setNotification, setUser } = useGlobalContext()
	const [load, setLoad] = useState(false)
	const navigate = useNavigate()

	const getProduct = async<ProductType>(url: string, saveGlobal: (object: ProductType[]) => void): Promise<ProductType[]> => {
		setLoad(true)
		const data = await connectionAPIGet(url)
			.then((result) => {
				if (saveGlobal) {
					saveGlobal(result.RESPONSE)
				}
				return result.RESPONSE
			})
			.catch((err: AxiosError) => {
				setNotification(err?.message, 'error')
				return undefined
			})
		return data
	}

	const loginRequest = async (url: string, body: any) => {
		setLoad(true)

		const data = await connectionAPIPost(url, body)
			.then((result) => {
				setAuthorizationToken(result.RESPONSE.access_token)
				setUser(result.RESPONSE)
				setNotification('Entrando...', 'success')
				navigate(ProductsRouterEnum.PRODUCTS)
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
		loginRequest,
		getProduct
	}
}

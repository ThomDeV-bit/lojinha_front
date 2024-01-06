import axios from "axios";
import { MethodsEnum } from "../enums/methods.enum";
import { ERRO_ACCESSE_DENIED, ERRO_CONNECTION } from "../constants/errorStatus";
import { GlobalAPIResponse } from "../../modules/types/GlobalAPIResponse";

export default class ConnectionAPI {
	static async call(url: string, method: string, body: unknown) {
		switch (method) {
			case (MethodsEnum.GET):
				return (await axios.get(url)).data;
			case (MethodsEnum.DELETE):
				return (await axios.delete(url)).data;
			case (MethodsEnum.POST):
				return (await axios.post(url, body)).data;
			case (MethodsEnum.PATCH):
				return (await axios.patch(url, body)).data;
			default:
				return (await axios.put(url, body)).data;

		}
	}
	static async connect(url: string, method: string, body?: unknown) {
		return ConnectionAPI.call(url, method, body).catch((error) => {
			if (error.response) {
				switch (error.response.status) {
					case 401:
					case 403:
						throw new Error(ERRO_ACCESSE_DENIED)
					default:
						throw new Error(ERRO_CONNECTION)

				}
			}
			throw new Error(ERRO_CONNECTION)
		})
	}
}

export const connectionAPIGet = async<T>(url: string): Promise<T> => {
	return ConnectionAPI.connect(url, MethodsEnum.GET)
}
export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
	return ConnectionAPI.connect(url, MethodsEnum.DELETE)
}
export const connectionAPIPost = async (url: string, body: unknown) : Promise <GlobalAPIResponse>=> {
	return ConnectionAPI.connect(url, MethodsEnum.POST, body)
}
export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
	return ConnectionAPI.connect(url, MethodsEnum.PUT, body)
}
export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
	return ConnectionAPI.connect(url, MethodsEnum.PATCH, body)
}
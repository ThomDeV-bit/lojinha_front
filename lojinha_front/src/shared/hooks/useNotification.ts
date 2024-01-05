import { message, notification as notificationAntd } from "antd"
import { useGlobalContext } from "./useGlobal"
import { useEffect } from "react"

export const useNotification = () => {
	const [api, contextHolder] = notificationAntd.useNotification()
	const { notification, setNotification } = useGlobalContext()

	useEffect(() => {
		if (notification?.message && notification.type) {
			api[notification.type]({
				message: `${notification.message}`,
				description: notification.description,
				placement: 'topRight'
			})
		}
	}, [setNotification])
	return {
		api,
		contextHolder
	}
}
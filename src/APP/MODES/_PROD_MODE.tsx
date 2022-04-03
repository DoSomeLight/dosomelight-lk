import { recogUser } from 'APP/LK/services/fns/recogUser'
import { getCookies } from 'APP/cookie/getCookies'
import { socket } from 'APP/socket.io'
import { COOKIES_DATA } from 'APP/vars-ts'

export const _PRODUCTION_MODE = (): COOKIES_DATA => {
	const cookies_data = getCookies()
	socket.on('connect', () => recogUser(cookies_data))
	return cookies_data
}

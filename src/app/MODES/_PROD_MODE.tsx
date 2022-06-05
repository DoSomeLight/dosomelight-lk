import { recogUser } from 'app/LK/services/fns/recogUser'
import { getCookies } from 'app/cookie/getCookies'
import { socket } from 'app/socket.io'
import { COOKIES_DATA } from 'app/vars-ts'
import { _DEV_cookie_MODE } from './_DEV_MODE'

export const _PRODUCTION_MODE = (): COOKIES_DATA => {
	const cookies_data = getCookies()
	if (cookies_data) {
		socket.on('connect', () => recogUser(cookies_data))
		return cookies_data
	} else _DEV_cookie_MODE()
}

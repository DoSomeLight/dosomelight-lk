import { COOKIES_DATA } from 'app/vars-ts'
import cookie from 'cookie'

export const getCookies = (): COOKIES_DATA => {
	console.dir(cookie.parse(document.cookie).lk_data)
	return JSON.parse(cookie.parse(document.cookie).lk_data)
}

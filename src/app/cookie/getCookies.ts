import { COOKIES_DATA } from 'app/vars-ts'
import cookie from 'cookie'

export const getCookies = (): COOKIES_DATA | false => {
	// console.dir(cookie.parse(document.cookie))
	if (cookie.parse(document.cookie)) {
		return JSON.parse(cookie.parse(document.cookie).lk_data)
	} else return false
}

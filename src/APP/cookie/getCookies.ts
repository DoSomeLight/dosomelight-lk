import { COOKIES_DATA } from 'APP/vars-ts'
import cookie from 'cookie'

export const getCookies = (): COOKIES_DATA => JSON.parse(cookie.parse(document.cookie).lk_data)

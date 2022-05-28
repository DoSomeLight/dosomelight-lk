import { COOKIES_DATA } from 'app/vars-ts'
import { _DEV_cookie_MODE } from './_DEV_MODE'
import { _PRODUCTION_MODE as _PROD_cookie_MODE } from './_PROD_MODE'

export const NODE_ENV = process.env.NODE_ENV,
	PRODUCTION = NODE_ENV === 'production'

export const get_COOKIE_DATA = (): COOKIES_DATA => (PRODUCTION ? _PROD_cookie_MODE() : _DEV_cookie_MODE())

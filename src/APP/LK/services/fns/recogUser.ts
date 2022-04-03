import { COOKIES_DATA } from 'APP/vars-ts'
import { socket } from 'APP/socket.io'

export const recogUser = (cookies_data: COOKIES_DATA) => socket.emit('users_new', cookies_data)

import { COOKIES_DATA } from 'app/vars-ts'
import { socket } from 'app/socket.io'

export const recogUser = (cookies_data: COOKIES_DATA) => socket.emit('users_new', cookies_data)

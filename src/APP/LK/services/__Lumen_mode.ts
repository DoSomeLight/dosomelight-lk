import { socket } from 'APP/socket.io'

export const __Lumen_mode = (crypted_id: string) => socket.emit(`lumen_mode_set_${crypted_id}`, 'payload')

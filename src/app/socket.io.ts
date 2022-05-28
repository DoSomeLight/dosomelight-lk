import { io } from 'socket.io-client'

export const socket = io('https://my.dosomelight.com', {
	query: { aatthh: '123' },
	//   autoConnect: true,
	//   reconnection: true,
	//   reconnectionDelay: 5000
	transports: ['polling', 'websocket']
})

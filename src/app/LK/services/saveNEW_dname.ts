import { socket } from 'app/socket.io'

export type DnameType = string | string[] | number | undefined

export type IsaveNEW_dname = (obj: {
	dname: DnameType
	device_type: string
	device_cr_id: string
	device_id: string
}) => void

export const saveNEW_dname: IsaveNEW_dname = ({ dname, device_type, device_cr_id, device_id }) =>
	socket.emit(`change_dname_${device_cr_id}`, {
		dname,
		device_type: device_type,
		pribor_id: device_id
	})

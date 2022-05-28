import { socket } from 'app/socket.io'
import { useState } from 'react'

export const useSchedules = (device_id: string) => {
	const [output_rasp_on, set_rasp_on] = useState(' ')
	const [output_rasp_off, set_rasp_off] = useState(' ')
	socket.on(`${device_id}_scen`, (otvet: { _scen_off: string; _scen_on: string }) => {
		console.dir(otvet)
		set_rasp_off(otvet._scen_off)
		set_rasp_on(otvet._scen_on)
	})
	return {
		rasp_on: output_rasp_on !== ' ' ? output_rasp_on : '',
		rasp_off: output_rasp_off !== ' ' ? output_rasp_off : '',
		set_rasp_off,
		set_rasp_on
	}
}

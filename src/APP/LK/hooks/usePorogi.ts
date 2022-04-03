import { socket } from 'APP/socket.io'
import { useState } from 'react'

export const usePorogi = (device_id: string) => {
	const [output_porog_up, set_porog_up] = useState(' ')
	const [output_porog_down, set_porog_down] = useState(' ')
	socket.on(`${device_id}_porogi`, (otvet: { _temp_down: string; _temp_up: string }) => {
		console.dir(otvet)
		set_porog_down(otvet._temp_down)
		set_porog_up(otvet._temp_up)
	})
	return {
		porog_down: output_porog_down !== ' ' ? output_porog_down : '',
		porog_up: output_porog_up !== ' ' ? output_porog_up : '',
		set_porog_down,
		set_porog_up
	}
}

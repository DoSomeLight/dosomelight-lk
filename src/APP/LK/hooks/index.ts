import { useState } from 'react'
import { socket } from 'APP/socket.io'
import { DEVICE_TOOGLE_STATUS } from 'APP/vars-ts'
type DTS = typeof DEVICE_TOOGLE_STATUS.onn

export type OnlineOfflineStatus_data = { onoffline: string; device_id: string }
export type ToogleButton_data = { toogle_status: 'onn' | 'off'; device_id: string }
export type Dname_data = { dname: string; device_id: string }
export type IuseTemperatureDisplay_props = { device_id: string }

export const useTemperatureDisplay = ({ device_id }: IuseTemperatureDisplay_props) => {
	let temperature1: string
	let temperature2: string
	const [changed_obj, set_temperature] = useState({
		temperature1: '',
		temperature2: ''
	})
	socket.on(`${device_id}_temps`, (d: { temp1: string; temp2: string }) =>
		set_temperature({ temperature1: d.temp1, temperature2: d.temp2 })
	)
	if (
		changed_obj.temperature1 === undefined ||
		changed_obj.temperature1 === null ||
		changed_obj.temperature1 === '' ||
		changed_obj.temperature1 === ' '
	)
		temperature1 = 'нет данных'
	else temperature1 = changed_obj.temperature1

	if (
		changed_obj.temperature2 === undefined ||
		changed_obj.temperature2 === null ||
		changed_obj.temperature2 === '' ||
		changed_obj.temperature2 === ' '
	)
		temperature2 = 'нет данных'
	else temperature2 = changed_obj.temperature2

	return { temperature1, temperature2 }
}

export const useOnOfflineStatus = ({ device_id, onoffline }: OnlineOfflineStatus_data) => {
	const [device_state, set_state_online_offline] = useState('')
	socket.on(`status_${device_id}`, status_otvet => set_state_online_offline(status_otvet))
	return {
		onoffline_status:
			device_state === 'online' ? 'online' : device_state === 'offline' ? 'offline' : onoffline
	}
}

export const useToogleButtonTermo = ({
	//TODO сделать один useToogleButton хук для всех приборов
	toogle_status,
	device_id: name
}: ToogleButton_data) => {
	let changed_css: ' ' | 'switch-on' //TODO сделать нормальный enum ( не используя " " пробела)
	if (toogle_status === 'onn') changed_css = 'switch-on'
	else if (toogle_status === 'off') changed_css = ' '
	else changed_css = ' '

	const [oo, set_css] = useState('')
	socket.on(`evev_${name}`, (otvet: { data: string }) => set_css(otvet.data))
	console.dir(oo)
	if (oo === 'relay_on' || oo === 'onn') changed_css = 'switch-on'
	if (oo === 'relay_off' || oo === 'off') changed_css = ' '

	return { TOOGLE_HOOK: { changed_css, set_css } }
}

export const useToogleButtonRelay = ({ toogle_status, device_id }: ToogleButton_data) => {
	const [toogle_state, set_toogle_state] = useState('')
	let changed_css: 'click-button' | 'click-button-on'
	if (toogle_status === 'onn') changed_css = 'click-button-on'
	else if (toogle_status === 'off') changed_css = 'click-button'
	else changed_css = 'click-button'

	socket.on(`evev_${device_id}`, (otvet: { data: string }) => set_toogle_state(otvet.data))
	if (toogle_state === 'relay_on' || toogle_state === 'onn') changed_css = 'click-button-on'
	else if (toogle_state === 'relay_off' || toogle_state === 'off') changed_css = 'click-button'

	return { TOOGLE_HOOK: { changed_css, set_css: set_toogle_state } }
}

export const useDnameONpriborBlock = ({ dname, device_id }: Dname_data) => {
	let _dname: string

	if (dname === '0') _dname = device_id
	else _dname = dname

	return { _dname }
}

export const useDnameINscens = ({ dname }: { dname: string }) => {
	const [output_dname, change_dname] = useState(' ')
	return {
		changedDname: output_dname !== ' ' ? output_dname : dname,
		change_dname
	}
}

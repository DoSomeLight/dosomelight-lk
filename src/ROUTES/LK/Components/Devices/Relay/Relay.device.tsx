import { useOnOfflineStatus, useToogleButtonRelay, useDnameONpriborBlock } from 'APP/LK/hooks'
import 'ROUTES/LK/Components/Devices/Assets/styles/button.scss'
import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
import { Ichanged_css_Relay, Ichanged_css_Termo } from 'ROUTES/LK/typings'
import { Dispatch, SetStateAction } from 'react'
import { SRelay_Toogle } from 'APP/LK/services/toggle_services/SRelay_Toogle'

export type IRelay_Toogle = (hook: {
	changed_css: Ichanged_css_Relay
	set_css: Dispatch<SetStateAction<string>>
}) => void

export interface IRelayBlock_props {
	default_props: {
		cr_pribor_id: string
		onoffline: string
		pribor_id: string
		pribor_type: 'relay' | 'termo' | 'lumen' | string
		toogle_state: 'onn' | 'off'
		dname: string
	}
	// special_props: { Relay_Toogler: IRelay_Toogle }
}

//? Элемент РЕЛЕ(РОЗЕТКА)
export const Relay = (props: EACH_DEVICE_PROPS) => {
	const { device_cr_id, device_id, onoffline, toogle_status, dname } = props

	let { TOOGLE_HOOK } = useToogleButtonRelay({ device_id, toogle_status })
	let { changed_css } = TOOGLE_HOOK
	let { onoffline_status } = useOnOfflineStatus({ device_id, onoffline })
	let { _dname } = useDnameONpriborBlock({ device_id, dname })
	const Toogler = () => SRelay_Toogle({ hook: TOOGLE_HOOK, device_cr_id: device_cr_id })

	return (
		<div className="device--main__div">
			<div className={`device--main__div--header__${onoffline_status}`} />
			<div className="device--main__div--header__id">{_dname}</div>
			<div onClick={() => Toogler()} className={changed_css} />
		</div>
	)
}

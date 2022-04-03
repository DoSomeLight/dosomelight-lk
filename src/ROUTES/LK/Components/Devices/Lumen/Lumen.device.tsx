import { SetStateAction, useState } from 'react'
import { socket } from 'APP/socket.io'
// import { IRelay_Toogle } from 'ROUTES/Lichniy_Kabinet/Modules/DeviceBlocks.layout.contract'
import { DisplayScensToogler } from 'APP/cssDisplayToogler.global/DisplayScensToogler'
import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
// import { Taccount_data } from 'ROUTES/Lichniy_Kabinet/master.Page.Lichniy_Kabinet'

export interface ILumen_Block_props {
	default_props: {
		cr_pribor_id: string
		onoffline: string
		pribor_id: string
		pribor_type: 'relay' | 'termo' | 'lumen' | string
		toogle_state: 'onn' | 'off'
		dname: string
	}
}

//TODO need DI and hooks
export const Lumen = (props: EACH_DEVICE_PROPS) => {
	let { toogle_status, onoffline, dname, device_cr_id, device_id, device_type } = props

	let online_offline_status: string = onoffline
	const [ooo, set_state_online_offline] = useState('')
	socket.on(`status_${device_id}`, (status_otvet: string) => {
		console.dir(status_otvet)
		// online_offline_status = status_otvet;
		set_state_online_offline(status_otvet)
	})
	if (ooo === 'online') online_offline_status = 'online'
	if (ooo === 'offline') online_offline_status = 'offline'

	let output_css: 'lumen' | 'lumen-on' = 'lumen'
	const [oo, set_css] = useState('')
	socket.on(`lumen_${device_id}_toogle`, (otvet: string) => {
		set_css(otvet)
	})
	if (oo === 'lumen-on') output_css = 'lumen-on'
	if (oo === 'lumen') output_css = 'lumen'

	let _dname: string

	dname === '0' ? (_dname = device_id) : (_dname = dname)

	return (
		<div className="device--main__div">
			<div className={`device--main__div--header__${online_offline_status}`}>
				{/* {props.onoffline} */}
			</div>
			<div className="device--main__div--header__id">
				{/* j789 */}
				{_dname}
			</div>

			<div onClick={() => Lumen_Toogle(set_css, output_css)} className={output_css}>
				{/* <div className="clicker"> </div> */}
			</div>
			<div className="lumen-bottom">
				<div className="buttons">
					<div className="lumen-music"></div>
					<div
						className="lumen-mode"
						onClick={() => {
							// __Lumen_mode(props.crypted_id);
						}}
					></div>
					<div
						className="lumen-settings"
						onClick={() => DisplayScensToogler(device_id, true)}
					></div>
				</div>
			</div>
		</div>
	)
}

const Lumen_Toogle: (set_css: React.Dispatch<SetStateAction<string>>, output_css: string) => void = (
	set_css,
	output_css
) => {
	console.log('Гирлянда кликнута')
	if (output_css === 'lumen-on') {
		console.dir('MUST lumen OFF')
		set_css('lumen')
		//  socket.emit(`mess ${crypted_id}`, 'off');
		//  socket.emit(`lumen_toogle_set_${crypted_id}`, 0);
	}
	if (output_css === 'lumen') {
		set_css('lumen-on')
		console.dir('MUST lumen on')
		//  socket.emit(`lumen_toogle_set_${crypted_id}`, 1);
		// socket.emit(`mess ${crypted_id}`, 'onn');
	}
}

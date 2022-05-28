// import { ITermo_Toogler } from 'ROUTES/Lichniy_Kabinet/Modules/DeviceBlocks.layout.contract'
import { useOnOfflineStatus, useToogleButtonTermo, useDnameONpriborBlock, useTemperatureDisplay } from 'app/LK/hooks'
import { DisplayScensToogler } from 'app/cssDisplayToogler.global/DisplayScensToogler'
import { EACH_DEVICE_PROPS } from 'app/vars-ts'
import { Ichanged_css_Termo } from 'ROUTES/LK/typings'
import { Dispatch, SetStateAction } from 'react'
import { STermo_Toogle } from 'app/LK/services/toggle_services/STermo_Toogle'

export type ITermo_Toogler = (hook: {
	changed_css: Ichanged_css_Termo
	set_css: Dispatch<SetStateAction<string>>
}) => void

export interface ITermoBlock_props {
	default_props: {
		cr_pribor_id: string
		onoffline: string
		pribor_id: string
		pribor_type: 'relay' | 'termo' | 'lumen' | string
		toogle_state: 'onn' | 'off'
		dname: string
	}
}

export const Termo = (props: EACH_DEVICE_PROPS) => {
	let { device_id, dname, onoffline, toogle_status, device_cr_id } = props

	let { temperature1, temperature2 } = useTemperatureDisplay({ device_id })
	let { onoffline_status } = useOnOfflineStatus({ device_id, onoffline })
	let { TOOGLE_HOOK } = useToogleButtonTermo({ toogle_status, device_id })
	let { _dname } = useDnameONpriborBlock({ dname, device_id })
	let { changed_css } = TOOGLE_HOOK
	const Toogler = () => STermo_Toogle({ hook: TOOGLE_HOOK, device_cr_id })

	return (
		<div className="device--main__div">
			<div className={`device--main__div--header__${onoffline_status}`} />
			<div className="device--main__div--header__id">{_dname}</div>
			<div className={`device--main__div--parts`}>
				<div children={temperature1} />
			</div>
			<div className="device--main__div--parts">
				<div children={temperature2} />
			</div>
			<div className="device--main__div--parts">
				<div className="action__block--device__block">
					<div className="action__block--device__block--switcher__parent__div">
						<div
							id={device_id}
							className={`switch-btn switcher_ ${changed_css}`}
							data-id="#bl-1"
							onClick={() => Toogler()}
						/>
					</div>
					<div className="action__block--device__block--switcher__parent__div">
						<button
							onClick={() => {
								// termo_setting_panel_opener(pribor_id);
								DisplayScensToogler(device_id, true)
							}}
							className="action__block--device__block--btnImageSettings"
						/>
					</div>
				</div>
			</div>

			<div className="innder-div--footer--parts" />
		</div>
	)
}

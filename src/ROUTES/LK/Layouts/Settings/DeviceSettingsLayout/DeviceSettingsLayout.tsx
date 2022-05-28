import { DEVICES_DATA } from 'app/vars-ts'

import './styles/lk--global--user_settings--wrapper--devices.scss'

export const DeviceSettingsLayout = (props: { devices_data: DEVICES_DATA }) => {
	const { devices_data } = props
	return (
		<div className="lk--global--user_settings--wrapper--devices">
			<div className="lk--global--user_settings--wrapper--devices--header">
				<div className="lk--global--user_settings--wrapper--account--header--label">
					# Приборы
				</div>
			</div>
			<div className="lk--global--user_settings--wrapper--devices--body">
				<DeviceTableLayout {...{ devices_data }} />
			</div>
		</div>
	)
}

const DeviceTableLayout = (props: { devices_data: DEVICES_DATA }) => (
	<div className="lk--global--user_settings--wrapper--devices--body--table">
		{props.devices_data.map(edp => (
			<div className="lk--global--user_settings--wrapper--devices--body--table--item">
				<div className="lk--global--user_settings--wrapper--devices--body--table--item--dname">
					{edp.dname}
				</div>
				<div className="lk--global--user_settings--wrapper--devices--body--table--item--info">
					<div>{edp.device_id}</div>
					<div>{edp.device_literal_type}</div>
				</div>
			</div>
		))}
	</div>
)

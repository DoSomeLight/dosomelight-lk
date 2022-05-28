import { EACH_DEVICE_PROPS } from 'app/vars-ts'
import { DisplayScensToogler } from 'app/cssDisplayToogler.global/DisplayScensToogler'
import { ScheduleTabs as PureScheduleTabs } from './element1.schedules.tabs/Schedule.tabs.lk'
import { Device4account as PureDevice4account } from './element2.device4account/Device4account.settings.lk'

export const DeviceScens = (props: EACH_DEVICE_PROPS) => {
	const { device_id } = props
	const ScheduleTabs = <PureScheduleTabs {...props} />
	const Device4account = <PureDevice4account {...props} />

	return (
		<div
			id={`device--scens__plates_${device_id}`}
			style={{
				display: 'none'
			}}
		>
			<div className={'device--scens__plates'}>
				<div className="device--scens__plates--inner--header">
					<div className="device--scens__plates--inner--header--left__buttons">
						<button>Сохрнаить</button>
					</div>

					<div className="device--scens__plates--inner--header--right__buttons">
						COLORS_MAP{' '}
						<button
							onClick={() =>
								DisplayScensToogler(device_id, false)
							}
						>
							Свернуть
						</button>
					</div>
				</div>

				<div className="device--scens__plates--inner--body">
					<div className="device--scens__plates--inner--body--elements">
						{/* Расписания переключения */}
						{ScheduleTabs}
					</div>

					<div className="device--scens__plates--inner--body--elements">
						{/* Настройки прибора относительно аккаунта */}
						{Device4account}
					</div>

					{/* <div className='device--scens__plates--inner--body--elements' /> */}
					{/* Настройка уведомлений прибора */}
					{/* <DeviceNotification
                            _name={props.name}
                        /> */}
				</div>
			</div>
		</div>
	)
}

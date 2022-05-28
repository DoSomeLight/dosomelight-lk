import { EACH_DEVICE_PROPS } from 'app/vars-ts'
import { TimeScheduler as PureTimeScheduler } from './TimeScheduler/TimeScheduler.lk'
import { QuickTimers as PureQuickTimers } from 'ROUTES/LK/Components/subPages/DeviceScenarios/element1.schedules.tabs/QuickTimers/QuickTimers'
import { Porogi as PurePorogi } from 'ROUTES/LK/Components/subPages/DeviceScenarios/element1.schedules.tabs/Porogi/Porogi.lk'

export const ScheduleTabs = (props: EACH_DEVICE_PROPS) => {
	const { device_id } = props
	const TimeScheduler = <PureTimeScheduler {...props} />
	const QuickTimers = <PureQuickTimers />
	const Porogi = <PurePorogi {...props} />
	return (
		<div className="element1--tabs--schedules">
			<div id={`расписания_${device_id}`}>{TimeScheduler}</div>
			<div id={`таймеры_${device_id}`}>{QuickTimers}</div>
			<div id={`пороги_${device_id}`}>{Porogi}</div>

			<div className="element1--tabs--schedules__links">
				<a href={`#расписания_${device_id}`}>Расписания</a>
				{/* <a href={`#таймеры_${props._name}`}>Таймеры</a> */}
				<a href={`#пороги_${device_id}`}>Пороги</a>
			</div>
		</div>
	)
}

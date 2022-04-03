import { add_btn_schedule } from 'APP'
import { socket } from 'APP/socket.io'
import $ from 'jquery'
import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
import { useSchedules } from 'APP/LK/hooks/useSchedules'

export const TimeScheduler = (props: EACH_DEVICE_PROPS) => {
	const { device_id, device_cr_id } = props
	const { rasp_off, rasp_on, set_rasp_off, set_rasp_on } = useSchedules(device_id)
	const UpdateScens = () =>
		update_scens({
			//TODO убрать jquery
			device_cr_id,
			device_id,
			scen_off: $(`#rasp_off_${device_id}`).val(),
			scen_on: $(`#rasp_on_${device_id}`).val()
		})
	return (
		<div className="device__schedule--element1--tab1--main__div">
			<div className="raspisanie__block">
				<button
				//TODO добавиь ocnlick
				>
					Добавить расписание
				</button>
				<button onClick={e => UpdateScens()}>Задать расписание</button>
			</div>
			<div>
				<input
					id={`rasp_off_${device_id}`}
					type="text"
					value={rasp_off}
					onChange={e => set_rasp_off(e.target.value)}
				/>
				<input
					id={`rasp_on_${device_id}`}
					type="text"
					value={rasp_on}
					onChange={e => set_rasp_on(e.target.value)}
				/>
			</div>
		</div>
	)
}

type I_scen = string | number | string[] | undefined
type Tupdate_scens = { device_cr_id: string; device_id: string; scen_off: I_scen; scen_on: I_scen }
const update_scens = ({ device_cr_id, device_id, scen_off, scen_on }: Tupdate_scens) => {
	console.dir('SET_SCENS')
	socket.emit(`set_scens_${device_cr_id}`, { device_id, scen_off, scen_on })
}

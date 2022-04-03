/* eslint-disable react-hooks/rules-of-hooks */
import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
import { usePorogi } from 'APP/LK/hooks/usePorogi'
import { socket } from 'APP/socket.io'
import $ from 'jquery'

export const Porogi = (props: EACH_DEVICE_PROPS) => {
	const { device_id, device_cr_id } = props
	const { porog_down, porog_up, set_porog_down, set_porog_up } = usePorogi(device_id)
	const UpdatePorogi = () =>
		update_porogi_termo(
			device_cr_id,
			device_id,
			$(`#porog_down_${device_id}`).val(),
			$(`#porog_up_${device_id}`).val()
		)
	return (
		<div className="device__schedule--element1--tab3--main__div">
			<button onClick={() => UpdatePorogi()}>Задать пороги</button>
			<div>
				<input
					id={`porog_down_${device_id}`}
					type="text"
					value={porog_down}
					onChange={e => {
						set_porog_down(e.target.value)
					}}
				/>
				<input
					id={`porog_up_${device_id}`}
					type="text"
					value={porog_up}
					onChange={e => {
						set_porog_up(e.target.value)
					}}
				/>
			</div>
		</div>
	)
}

type I_porogi = string | number | string[] | undefined
const update_porogi_termo = (cr_id: string, pribor_id: string, porog_down: I_porogi, porog_up: I_porogi) =>
	socket.emit(`update_porogi_${cr_id}`, { pribor_id, porog_down, porog_up })

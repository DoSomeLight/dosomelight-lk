import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
import { useDnameINscens } from 'APP/LK/hooks'
import { saveNEW_dname } from 'APP/LK/services/saveNEW_dname'
import $ from 'jquery'
import { ChangeEvent } from 'react'

export type IDevice4account_data = {
	device_id: string
	dname: string
	// saveNEW_dname: (obj: { dname: string | string[] | undefined | number }) => void
}

/**
 *Настройки прибора относительно аккаунта
 */
export const Device4account = (props: EACH_DEVICE_PROPS) => {
	const { device_cr_id, device_id, device_literal_type, dname } = props
	const { changedDname, change_dname } = useDnameINscens({ dname })
	const SaveNewDname = () =>
		saveNEW_dname({
			dname: $(`#dname_inpt_${device_id}`).val(),
			device_cr_id,
			device_id,
			device_type: device_literal_type
		})
	const ChangeDName = (e: ChangeEvent<HTMLInputElement>) => change_dname(e.target.value)
	console.table()
	return (
		<div>
			Название устройства
			<div>
				<input
					id={`dname_inpt_${device_id}`}
					type="text"
					placeholder="Название устройства"
					color="black"
					value={changedDname}
					onChange={e => ChangeDName(e)}
				/>
			</div>
			<button onClick={() => SaveNewDname()}>Сохранить</button>
			{/* <div>
                <button>
                Дать доступ к устройству
                </button>
            </div> */}
		</div>
	)
}

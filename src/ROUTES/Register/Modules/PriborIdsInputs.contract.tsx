import { useState } from 'react'
import { PriborIdsInput } from 'ROUTES/Register/Components/Inputs/PriborIdsInputs'
import { DelIdBtn } from '../Components/Buttons/DelId.btn'
import { IPlusIdBtn } from '../Components/Buttons/PlusId.btn'
export interface IPriborIdsInputs_Contract {
	(props: { PlusIdBtn: IPlusIdBtn }): {
		Pribor_ids_inputs: JSX.Element[]
		PlusId_Btn: JSX.Element
	}
}

export const PriborIdsInputs_Contract: IPriborIdsInputs_Contract = ({ PlusIdBtn }) => {
	const [counter, counter_perform] = useState(1)
	const [changedMass, perform_value] = useState([''])
	console.dir(counter)
	console.dir(changedMass)
	const PlusId_Btn = (
		<PlusIdBtn
			key="plus_btn"
			counter_pp={() => {
				let _counter = counter + 1
				counter_perform(_counter)
			}}
			plus_value={perform_value}
			changedMass={changedMass}
		/>
	)

	const Pribor_ids_inputs = changedMass.map((value, i) => (
		<PriborIdsInput
			id={`pribor_id_${i}`}
			index={i}
			key={`${i}`}
			_value={value}
			changedMass={changedMass}
			perform_value={perform_value}
			Del_btn={() => (
				<DelIdBtn
					_value={value}
					index={i}
					key="del_btn"
					counter_mm={() => counter_perform(counter - 1)}
					id={`del_btn_${i}`}
					del_value={perform_value}
					changedMass={changedMass}
				/>
			)}
		/>
	))

	return { Pribor_ids_inputs, PlusId_Btn }
}

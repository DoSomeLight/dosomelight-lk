/* eslint-disable react/jsx-pascal-case */
import { Dispatch, SetStateAction, useState } from 'react'
import './Assets/Styles/styles.scss'
import './input__pii.scss'
import './id_input_item.scss'

export interface IPriborIdsInput {
	(props: {
		_value: string
		id: string
		index: number
		Del_btn: () => JSX.Element
		changedMass: string[]
		perform_value: Dispatch<SetStateAction<string[]>>
	}): JSX.Element
}

export const PriborIdsInput: IPriborIdsInput = ({ _value, id, Del_btn, index, changedMass, perform_value }) => {
	let [__value, change_local_value] = useState('')
	const Value = __value === '' ? _value : __value
	return (
		<div id={`pii_${index}`} className="id_input_item">
			<input
				key={index}
				id={`input__${index}`}
				type="text"
				value={Value}
				className="input__pii"
				onChange={event => {
					change_local_value(event.target.value)
					let _changedMass = changedMass
					_changedMass[index] = event.target.value
					perform_value(_changedMass)
				}}
			/>
			<Del_btn />
		</div>
	)
}

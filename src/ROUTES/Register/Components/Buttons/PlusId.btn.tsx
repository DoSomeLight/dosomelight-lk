import { Dispatch, SetStateAction } from 'react'
import './Assets/Styles/plus_btn.scss'
export interface IPlusIdBtn {
	(props: {
		plus_value: Dispatch<SetStateAction<string[]>>
		changedMass: string[]
		counter_pp: () => void
	}): JSX.Element
}

export const PlusIdBtn: IPlusIdBtn = ({ plus_value, changedMass, counter_pp }) => {
	return (
		<div
			className="plus_btn"
			key="plus_btn"
			id="plus_btn"
			onClick={() => {
				counter_pp()
				let _changedMass: string[] = changedMass
				_changedMass.push('')
				plus_value(_changedMass)
			}}
		>добавить ID</div>
	)
}

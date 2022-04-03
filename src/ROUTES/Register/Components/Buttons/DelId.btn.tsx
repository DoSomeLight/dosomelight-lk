import { Dispatch, SetStateAction } from 'react'
import './Assets/Styles/del_btn.scss'
export interface IDelIdBtn {
	(props: {
		del_value: Dispatch<SetStateAction<string[]>>
		changedMass: string[]
		id: string
		index: number
		counter_mm: () => void
		_value: string
	}): JSX.Element
}

export const DelIdBtn: IDelIdBtn = ({ del_value, changedMass, id, index, counter_mm, _value }) => {
	return (
		<div
			className="del_btn"
			key="del_btn"
			id={id}
			onClick={() => {
				counter_mm()
				// let _index = index;
				// let _changedMass: string[] = [];
				// let gg: any = document.getElementById(`input__${index}`);
				// // console.dir(gg.value);
				// // console.dir(changedMass[index]);
				// changedMass.forEach((val, i) => {
				//   if (val != _value) {
				//     _changedMass.push(val);
				//     console.dir(val);
				//   }
				// });
				// console.dir(`count of rez mass ${_changedMass.length}`);
				// _changedMass.splice(index);
				document.getElementById(`pii_${index}`)?.remove()
				// del_value(_changedMass);
				// let _changedMass: string[] = [];
				// for (let i = 0; i < changedMass.length - 1; i++) {
				//   _changedMass.push('');
				// }

				// document.getElementById(`pii_${index}`)?.remove();
				// let _changedMass: string[] = [];
				// for (let i = 0; i < changedMass.length + 1; i++) {
				//   _changedMass.push('');
				// }
				// del_value(_changedMass);
			}}
		/>
	)
}

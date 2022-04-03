import React, { useCallback, useRef, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import EmojiNatureIcon from '@material-ui/icons/EmojiNature'
import { socket } from 'APP/socket.io'
import validator from 'validator'
import { ClassNameMap } from '@material-ui/styles'
import './St.scss'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& input:valid + fieldset': {
				borderColor: 'blue',
				borderWidth: 2
			},
			'& input:invalid + fieldset': {
				borderColor: 'black',
				borderWidth: 2
			},
			'& input:valid:focus + fieldset': {
				borderLeftWidth: 6,
				padding: '4px !important' // override inline-style
			}
		},
		margin: {
			margin: theme.spacing(1)
		}
	})
)

const whenTrue = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& input:valid:not(:focus) + fieldset': {
				borderColor: 'red',
				borderWidth: 3,
				label: 'занято'
			},
			'& input:valid:focus + fieldset': {
				borderColor: 'red',
				borderWidth: 3,
				label: 'занято'
			}

			// display: 'flex',
			// flexWrap: 'wrap',
		},
		margin: {
			margin: '88',
			'& input:valid:focus + fieldset': {
				// borderColor: 'yellow',
				borderWidth: 6
			}
		}
	})
)

const whenFalse = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& input:valid:not(:focus) + fieldset': {
				borderColor: 'green',
				borderWidth: 3,
				label: 'занято'
			},
			'& input:valid:focus + fieldset': {
				borderColor: 'green',
				borderWidth: 3,
				label: 'занято'
			}

			// display: 'flex',
			// flexWrap: 'wrap',
		},
		margin: {
			margin: '88',
			'& input:valid:focus + fieldset': {
				// borderColor: 'yellow',
				borderWidth: 6
			}
		}
	})
)

const devCheck = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputer: any, input_id: string) => {
	let device_id = e.target.value
	if (validator.isLength(device_id, { min: 4, max: undefined })) {
		console.dir('LENGHTHT dev IS OK')
		socket.emit('device_input_check', { device_id, input_id })
	} else {
		//inputer(`default${input_id}`);
	}
}
const initialState = whenTrue

function reducer(state: any, action: any) {
	// switch (action.data) {
	//   case `deviceisfree${action.id}`:
	//     return whenTrue;
	//   case `devicenotfree${action.id}`:
	//     return whenFalse;
	//   default:
	//   //  throw new Error();
	return action.data
}

type _validateDevs = { id: string; ee: string }

export default function ValidateDevs(props: _validateDevs) {
	// const [outputter, color_updater] = useState({
	//   value1: "1",value2: "2"
	// });

	let resu: ClassNameMap<'margin' | 'root'> = useStyles()
	// const [outputter, color_update] = useReducer(reducer, initialState);
	const [outputter, color_update] = useState('')
	const valueRef = useRef(outputter)
	valueRef.current = '0202'

	//const inputEl = useRef(null);
	//console.dir(state);
	let def_class = useStyles()
	let ee
	let zanyatclass = whenTrue()
	let svobodenclass = whenFalse()
	// let classes;
	// let trueclass;

	//  console.dir(`THE RAND: ${rand}`)

	// if(outputter == 'qwe'){
	//   resu = trueclass;
	//   ee = 'Прибор уже используется';
	// }else{
	//     resu = classes;
	//   ee = 'Введите ID';
	// }

	console.dir(outputter)
	if (outputter === `deviceisfree${props.id}`) {
		console.dir('ДЕВ СВОБОДЕН')
		resu = svobodenclass
		//console.dir(props.id);
		//resu = classes;
		//resu = classes;
		ee = 'свободно'
	}
	if (outputter === `devicenotfree${props.id}`) {
		console.dir('ДЕВ ЗАНЯТ')

		resu = zanyatclass
		ee = 'Прибор уже используется'
	}
	if (outputter === `default${props.id}`) {
		//  resu = classes;
		ee = 'Введите ID'
	}

	//   const incrementValue = Number(incrementAmount) || 0;
	const handleClick = useCallback(otvet => {
		color_update(otvet)
	}, [])

	return (
		<div>
			<input
				id={props.id}
				className="Inputter"
				type="text"
				name="input"
				onChange={e => devCheck(e, color_update, props.id)}
			></input>
			<EmojiNatureIcon viewBox={'157 0 25 25'} className="input__icon" />
		</div>
	)
}

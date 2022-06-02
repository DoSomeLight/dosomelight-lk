import { useState } from 'react'
import './Assets/Styles/styles.scss'
export interface IMainInputs {
	(props: { main_input_type: 'email' | 'login' | 'password'; SvgImage: JSX.Element }): JSX.Element
}

export const MainInputs: IMainInputs = ({ main_input_type, SvgImage }) => {
	const isEmail = main_input_type === 'email'
	const isLogin = main_input_type === 'login'
	const isPassword = main_input_type === 'password'
	let [value, setValue] = useState('')
	return (
		<div id={`wrapper--input__svg--${main_input_type}`} className="register--wrapper--input-svg">
			{/* {SvgImage} */}
			<input
				placeholder={isEmail ? 'email' : isLogin ? 'login' : 'password'}
				className="register--input__component"
				type={main_input_type}
				name={`${main_input_type}-input`}
				id={`${main_input_type}-input`}
				onChange={event => {
					setValue(event.target.value)
				}}
				value={value}
			/>
		</div>
	)
}

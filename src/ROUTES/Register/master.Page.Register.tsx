/* eslint-disable react/jsx-pascal-case */
import './Assets/Styles/master.page.register.scss'
import './reg-btn.scss'
import { Header } from 'ROUTES/Register/Components/Header/Header'
import { MainInputs_Contract } from './Modules/MainInputs.contract'
import { PriborIdsInputs_Contract } from './Modules/PriborIdsInputs.contract'
import { PlusIdBtn } from './Components/Buttons/PlusId.btn'

export const REGISTER_PAGE = () => {
	let { Inputs, Pribor_ids_inputs, PlusId_Btn } = Register_Contracts()

	return (
		<div id="register__main__div" className="register">
			<div id="wrapper" className="register--wrapper">
				<div id="1reg_stage" className="register--wrapper--1reg_stage">
					<Header />
					<div
						id="inputs_wrapper"
						className="register--wrapper--1reg_stage--inputs_wrapper"
					>
						{Inputs}
						<div
							className="register--wrapper--1reg_stage--inputs_wrapper--pribor_ids"
							id="inputs_wrapper--pribor_ids"
						>
							{PlusId_Btn}
							{Pribor_ids_inputs}
							<div className="reg-btn">Зарегистрировать</div>
							{/* <div id='plus_btn' />
              <div id='pribor_ids--inputs'></div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Register_Contracts = () => {
	let { Inputs } = MainInputs_Contract({
		main_input_types: ['email', 'login', 'password'],
		icon_types: ['email', 'login', 'password']
	})
	// let mass = document.getElementsByClassName('input__pii');
	// mass.item()
	let { Pribor_ids_inputs, PlusId_Btn } = PriborIdsInputs_Contract({ PlusIdBtn })

	return {
		Inputs,
		Pribor_ids_inputs,
		PlusId_Btn
	}
}

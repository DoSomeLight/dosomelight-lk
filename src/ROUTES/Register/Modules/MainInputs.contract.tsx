/* eslint-disable react/jsx-pascal-case */
import { MainInputs } from '../Components/Inputs/MainInputs'
import { Email_svg } from '../Components/Inputs/Assets/Svg/email.svg'
export interface IMainInputs_Contract {
	(props: {
		main_input_types: ('email' | 'login' | 'password')[]
		icon_types: ('email' | 'login' | 'password')[]
	}): { Inputs: JSX.Element[] }
}

export const MainInputs_Contract: IMainInputs_Contract = ({ main_input_types }) => {
	const Svgs: JSX.Element[] = main_input_types.map(type => <Email_svg icon_type={type} />)
	const Inputs: JSX.Element[] = main_input_types.map((type, i) => (
		<MainInputs key={type} SvgImage={Svgs[i]} main_input_type={type} />
	))
	return { Inputs }
}

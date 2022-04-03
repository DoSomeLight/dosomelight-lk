import './Assets/Styles/styles.scss'

export type IMain_Inputs = { (props: { child_input: JSX.Element }): JSX.Element }

export const Main_Inputs_layout: IMain_Inputs = ({ child_input }) => (
	<div className="register--main_inputs_layout">{child_input}</div>
)

import './Assets/Styles/header.btns.scss'

export const Drop_down_btn = ({ user_name }: { user_name: string }) => (
	<div id="header-drop_down" className="lk--header-drop_down">
		<div children={`${user_name}`} />
	</div>
)

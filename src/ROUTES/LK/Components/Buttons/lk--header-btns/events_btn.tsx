import './Assets/Styles/header.btns.scss'

export type IEvents_btn_props = { label_text: string }

export const Events_btn = ({ label_text }: IEvents_btn_props) => (
	<div id="header-events_btn" className="lk--header-btns">
		<div children={`${label_text}`} />
	</div>
)

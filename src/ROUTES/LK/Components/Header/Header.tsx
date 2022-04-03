import { Drop_down_btn } from '../Buttons/lk--header-btns/drop_down'
import { Events_btn } from '../Buttons/lk--header-btns/events_btn'
import { Gsettings_btn } from '../Buttons/lk--header-btns/gsettings_btn'
import { Scens_btn } from '../Buttons/lk--header-btns/scens_btn'
import './Assets/Styles/header.scss'

export type IHeader = { (props: { user_name: string }): JSX.Element }

export const Header: IHeader = ({ user_name }) => {
	return (
		<div className="lk--header">
			<div id="logo-image" className="lk--header--header_logo" />
			{/* {Events_btn} {Scens_btn} {Gsettings_btn} {Drop_down_btn} */}
			<Events_btn label_text={'cобытия'} />
			<Scens_btn label_text={'Сценарии'} />
			<Gsettings_btn label_text={'Настройки'} />
			<Drop_down_btn {...{ user_name }} />
		</div>
	)
}

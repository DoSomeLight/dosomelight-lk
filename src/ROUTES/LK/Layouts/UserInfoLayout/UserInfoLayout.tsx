import { ACCOUNT_DATA } from 'APP/vars-ts'

import './style/user__info__layout.scss'

type IUserInfo = { (props: { account_data: ACCOUNT_DATA }): JSX.Element }

export const UserInfoLayout: IUserInfo = props => {
	const { account_data } = props
	const { user_name, user_device_system, user_email, user_phone } = account_data
	return (
		<div className="user__info__layout">
			<div id="user__icon" className="user__info__layout--icon">
				icon
			</div>

			<div className="user__info__layout--text">
				<div>
					<div>Логин:</div>
					<div className="user__info__layout--text--value"> {user_name}</div>
				</div>

				<div>
					<div>Устройство входа</div>
					<div className="user__info__layout--text--value">
						{user_device_system}
					</div>
				</div>
			</div>
		</div>
	)
}

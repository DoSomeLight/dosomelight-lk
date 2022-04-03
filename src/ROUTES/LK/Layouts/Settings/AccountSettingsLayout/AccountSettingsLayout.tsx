import { ACCOUNT_DATA } from 'APP/vars-ts'

import './style/lk--global--user_settings--wrapper--account.scss'

export const AccountSettingsLayout: (props: { account_data: ACCOUNT_DATA }) => JSX.Element = props => {
	const {
		account_data: { user_name, user_email, user_phone }
	} = props
	return (
		<div className="lk--global--user_settings--wrapper--account">
			<div className="lk--global--user_settings--wrapper--account--header">
				{/** Желтая панель - Header */}
				<div className="lk--global--user_settings--wrapper--account--header--label">
					# Аккаунт
				</div>
			</div>
			<div className="lk--global--user_settings--wrapper--account--body">
				<div className="lk--global--user_settings--wrapper--account--body--stripe">
					<div className="lk--global--user_settings--wrapper--account--body--stripe--wrapper">
						<AccountRow value={user_name} hint="Имя пользователя" />
						<AccountRow value={user_email} hint="Email" />
					</div>
				</div>
			</div>
		</div>
	)
}

const AccountRow = (props: { value: string; hint: string }) => (
	<div className="lk--global--user_settings--wrapper--account--body--stripe--wrapper--row__spacer">
		<div className="lk--global--user_settings--wrapper--account--body--stripe--wrapper--row__spacer--label">
			{props.value}
		</div>
		<div className="lk--global--user_settings--wrapper--account--body--stripe--wrapper--row__spacer--hint">
			{props.hint}
		</div>
	</div>
)

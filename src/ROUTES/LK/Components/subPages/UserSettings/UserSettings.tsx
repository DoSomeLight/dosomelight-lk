import './styles/lk--global--user_settings.scss'
import { ACCOUNT_DATA, DEVICES_DATA } from 'app/vars-ts'
import { AccountSettingsLayout } from 'ROUTES/LK/Layouts/Settings/AccountSettingsLayout/AccountSettingsLayout'
import { UserInfoLayout } from 'ROUTES/LK/Layouts/UserInfoLayout/UserInfoLayout'
import { DeviceSettingsLayout } from 'ROUTES/LK/Layouts/Settings/DeviceSettingsLayout/DeviceSettingsLayout'
import { SettingsFinderLayout } from 'ROUTES/LK/Layouts/Settings/SettingsFinderLayout/SettingsFinderLayout'

type TUserSettings = { (props: { account_data: ACCOUNT_DATA; devices_data: DEVICES_DATA }): JSX.Element }

export const UserSettings: TUserSettings = ({ account_data, devices_data }) => (
	<div
		id="global--user_settings"
		style={{
			display: 'none',
			width: '100%'
			// height: 'calc(100vh - 50px - 25px)'
		}}
	>
		<div className="lk--global--user_settings">
			<div className="lk--global--user_settings--settings_header">
				{/* шапка настроек */}
				<UserInfoLayout {...{ account_data }} />
				<SettingsFinderLayout
					topics={[
						{ label: '# Аккаунт' },
						{ label: '# Приборы' },
						{ label: '# Приборы' }
					]}
				/>
			</div>

			<div className="lk--global--user_settings--wrapper">
				{/** Рукава настроек */}
				<AccountSettingsLayout {...{ account_data }} />
				<DeviceSettingsLayout {...{ devices_data }} />
			</div>
		</div>
	</div>
)

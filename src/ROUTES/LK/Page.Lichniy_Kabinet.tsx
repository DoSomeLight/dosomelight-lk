import { BackgroundWrapper } from 'ROUTES/LK/Layouts/Body/Background__Wrapper/Background__Wrapper.lk'
import { FooterLK } from 'ROUTES/LK/Components/Footer/Footer'
import { MAINdiv } from 'ROUTES/LK/Layouts/Body/Background__Wrapper/MAINdiv/MAINdiv.lk'

import { DeviceMapper } from 'ROUTES/LK/Modules/DeviceBlocks.layout.contract'
import { DeviceScens } from 'ROUTES/LK/Components/subPages/DeviceScenarios/DeviceScens.lk'
import { AccountContext } from 'app/contexts/AccountContext'
import { UserSettings } from 'ROUTES/LK/Components/subPages/UserSettings/UserSettings'
import { Header } from 'ROUTES/LK/Components/Header/Header'

export const LICHNIY_KABINET = () => (
	<AccountContext.Consumer>
		{({ devices_data, account_data }) => (
			<BackgroundWrapper /** //TODO Доделать lazyload img */>
				<MAINdiv
					Header={<Header user_name={account_data.user_name} />}
					DeviceScens={devices_data.map(edp => (
						<DeviceScens {...edp} />
					))}
					UserSettings={<UserSettings {...{ devices_data, account_data }} />}
				>
					{devices_data.map(edp => (
						<DeviceMapper {...edp} />
					))}
				</MAINdiv>
				<FooterLK />
			</BackgroundWrapper>
		)}
	</AccountContext.Consumer>
)

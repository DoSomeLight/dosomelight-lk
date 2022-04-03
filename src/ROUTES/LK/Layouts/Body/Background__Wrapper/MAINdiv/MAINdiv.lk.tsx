import { DeviceCells } from 'ROUTES/LK/Layouts/DeviceCells/DeviceCells'

export const MAINdiv = (props: {
	Header?: JSX.Element
	children?: JSX.Element[]
	DeviceScens?: JSX.Element[]
	UserSettings?: JSX.Element
}) => (
	<div className="lk--background__wrapper--width-wrap">
		{props.Header}

		<DeviceCells>{props.children}</DeviceCells>

		{props.DeviceScens}
		{props.UserSettings}
	</div>
)

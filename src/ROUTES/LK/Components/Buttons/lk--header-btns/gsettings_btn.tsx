import { toggleDisplay } from 'APP/LK/toggleDisplay'

export type IGsettings_btn_props = { label_text: string }

export const Gsettings_btn = ({ label_text }: IGsettings_btn_props) => (
	<div
		id="header-gsettings_btn"
		className="lk--header-btns"
		onClick={e => toggleDisplay('global--user_settings')}
	>
		{label_text}
	</div>
)

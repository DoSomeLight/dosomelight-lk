import { socket } from 'APP/socket.io'
import { SetStateAction } from 'react'
import { Ichanged_css_Relay } from 'ROUTES/LK/typings'

export interface ISRelay_Toogle {
	(obj: {
		hook: {
			set_css: React.Dispatch<SetStateAction<string>>
			changed_css: Ichanged_css_Relay
		}

		device_cr_id: string
	}): void
}

export const SRelay_Toogle: ISRelay_Toogle = ({ hook, device_cr_id }) => {
	let { changed_css, set_css } = hook
	console.log('You clicked on the yellow square!')
	//  console.dir(changed_css);
	if (changed_css === 'click-button-on') {
		set_css('relay_off')
		socket.emit(`mess ${device_cr_id}`, 'off')
	} else if (changed_css === 'click-button') {
		set_css('relay_on')
		socket.emit(`mess ${device_cr_id}`, 'onn')
	}
}

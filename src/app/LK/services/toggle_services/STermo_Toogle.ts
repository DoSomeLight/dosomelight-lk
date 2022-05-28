import { socket } from 'app/socket.io'
import { SetStateAction } from 'react'
import { Ichanged_css_Termo } from 'ROUTES/LK/typings'

export interface ISTermo_Toogle {
	(obj: {
		hook: {
			set_css: React.Dispatch<SetStateAction<string>>
			changed_css: Ichanged_css_Termo
		}

		device_cr_id: string
	}): void
}

export const STermo_Toogle: ISTermo_Toogle = ({ hook, device_cr_id }) => {
	let { changed_css, set_css } = hook
	console.dir(hook)
	// console.log('You clicked on the yellow square!');
	if (changed_css === 'switch-on') {
		set_css('relay_off')
		socket.emit(`mess ${device_cr_id}`, 'off')
	} else if (changed_css === ' ') {
		set_css('relay_on')
		socket.emit(`mess ${device_cr_id}`, 'onn')
	}
}

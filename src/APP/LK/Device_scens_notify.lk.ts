import $ from 'jquery'
type Icurrent = 'sms' | 'lk' | 'android'

export default function selectNotifyType(current: Icurrent, _name: string) {
	//TODO rewrite code below without jquery
	const types_massiv = ['sms', 'lk', 'android']
	if (!$(`#${_name}_device--scens--notify__settings--${current}`).hasClass('display_yes')) {
		$(`#${_name}_device--scens--notify__settings--${current}`).addClass('display_yes')
		if (
			!$(`#${_name}_device--scens--notify__settings--${current}`).hasClass(
				`device--scens--notify__settings--${current}`
			)
		) {
			$(`#${_name}_device--scens--notify__settings--${current}`).addClass(
				`device--scens--notify__settings--${current}`
			)
		}
	}
	if ($(`#${_name}_device--scens--notify__settings--${current}`).hasClass('display_no')) {
		$(`#${_name}_device--scens--notify__settings--${current}`).removeClass('display_no')
	}

	types_massiv.forEach(_type => {
		if (_type !== current) {
			if (!$(`#${_name}_device--scens--notify__settings--${_type}`).hasClass('display_no')) {
				$(`#${_name}_device--scens--notify__settings--${_type}`).addClass('display_no')
				if (
					!$(`#${_name}_device--scens--notify__settings--${_type}`).hasClass(
						`device--scens--notify__settings--${current}`
					)
				) {
					$(`#${_name}_device--scens--notify__settings--${current}`).remove(
						`device--scens--notify__settings--${current}`
					)
				}
			}
			if ($(`#${_name}_device--scens--notify__settings--${current}`).hasClass('display_yes')) {
				$(`#${_name}_device--scens--notify__settings--${current}`).removeClass(
					'display_yes'
				)
			}
		}
	})
}

import { COOKIES_DATA, DEVICES_DATA, DEVICE_ONOFFLINE_STATUS, DEVICE_TOOGLE_STATUS, DEVICE_TYPES } from 'app/vars-ts'

export const _DEV_cookie_MODE = (): COOKIES_DATA => {
	const device_ids: string[] = ['zxcv1', 'zxcv8', 'zxcv3', 'kl789', 'zxc78', 'zxcv5']

	const device_types: (keyof typeof DEVICE_TYPES)[] = ['relay', 'relay', 'lumen', 'termo', 'termo', 'relay']

	const device_cr_ids: string[] = [
		'zxcv8shjshjsh',
		'zxcv8ksjskjksks',
		'zxcv8sksissklsk',
		'zxcv8shjshjsh',
		'zxcv8ksjskjksks',
		'zxcv8sksissklsk'
	]

	const onofflines: DEVICE_ONOFFLINE_STATUS[] = ['online', 'offline', 'online', 'offline', 'online', 'offline']

	const devs_statuses: (keyof typeof DEVICE_TOOGLE_STATUS)[] = ['off', 'onn', 'off', 'onn', 'off', 'onn']

	const dnames: string[] = ['розетка1', 'розетка2', 'гирлянда', 'Инкубатор', 'Йогуртница', 'Обогреватель']

	return {
		account_data: {
			user_device_system: 'mobile',
			user_email: 'user@mail.com',
			user_name: 'dev_user',
			user_hash: '123456789',
			user_phone: '+8123456789987'
		},

		devices_data: device_ids.map((device_id, i) => ({
			device_cr_id: device_cr_ids[i],
			device_id,
			device_literal_type: device_types[i],
			device_type: 0,
			dname: dnames[i],
			onoffline: onofflines[i],
			toogle_status: devs_statuses[i]
		})) as DEVICES_DATA
	}
}

export type Icookie_data = {
	user_name: string
	dnames: any
	pribor_types: [a: Ipribor_types, b: Ipribor_types, c: Ipribor_types] | string[]
	pribor_ids: string[]
	cr_pribor_ids: string[]
	pribors_onoffline: string[]
	toogle_statuses: Array<'onn' | 'off'>
	count_pribors: number
	hash_data: any
}

export type Ichanged_css_Relay = 'click-button' | 'click-button-on'
export type Ichanged_css_Termo = ' ' | 'switch-on'

export type Ipribor_types = 'relay' | 'termo' | 'lumen'

export const DisplayScensToogler = (pribor_id: string, display_status: boolean, css?: string) =>
	display_status
		? document
				.getElementById(`device--scens__plates_${pribor_id}`)
				?.setAttribute(
					'style',
					'display: flex; position:absolute; bottom:0; flex-direction: column;'
				)
		: document
				.getElementById(`device--scens__plates_${pribor_id}`)
				?.setAttribute('style', 'display: none')

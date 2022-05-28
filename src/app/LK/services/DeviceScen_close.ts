export type IDeviceScen_close = (obj: { pribor_id: string }) => void

export const DeviceScen_close: IDeviceScen_close = ({ pribor_id }) =>
	$(`#device--scens__plates_${pribor_id}`).attr('style', 'display: none')

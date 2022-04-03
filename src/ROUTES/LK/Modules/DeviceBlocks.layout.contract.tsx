/* eslint-disable react/jsx-pascal-case */
import { EACH_DEVICE_PROPS } from 'APP/vars-ts'
import { Termo } from 'ROUTES/LK/Components/Devices/Termo/Termo.device'
import { Relay } from 'ROUTES/LK/Components/Devices/Relay/Relay.device'
import { Lumen } from 'ROUTES/LK/Components/Devices/Lumen/Lumen.device'
const DEVICE_MAP = (props: EACH_DEVICE_PROPS) => ({
	relay: Relay(props),
	termo: Termo(props),
	lumen: Lumen(props)
})

export const DeviceMapper = (edp: EACH_DEVICE_PROPS) => DEVICE_MAP(edp)[edp.device_literal_type]

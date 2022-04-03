var perf_element: any = (id: string) => document.getElementById(`${id}`)
var toggleDeviceCells = (display: boolean) =>
	(document.getElementById('device_cells').style.display = display ? 'flex' : 'none')

export const toggleDisplay = (id: string) =>
	perf_element(id).style.display === 'flex'
		? ((perf_element(id).style.display = 'none'), toggleDeviceCells(true))
		: ((perf_element(id).style.display = 'flex'), toggleDeviceCells(false))

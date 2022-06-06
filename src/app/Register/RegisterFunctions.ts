import $ from 'jquery'
import { socket } from 'app/socket.io'
import { counter, AdderInputID } from 'ROUTES/Register/DEPRECATED__adder_input/AdderInputID'

const getDeviceIDS = () => {
	let arr: string[] = []
	for (let i = 0; i < 6; i++) {
		const el: string = $(`#input__${i}`).val() as string
		if (el) {
			arr[i] = el
		}
	}
	return arr
}

class RegisterData {
	public check_N_sendToRegister = (cb: (is_ready_for_reg: boolean) => void) => {
		let is_ready_for_reg = false
		// const arr = new Array(6)

		// console.dir(`the input0::: ${getDeviceIDS()}`)

		const inputValues = {
			email: $('#email-input').val()?.toString(),
			login: $('#login-input').val()?.toString(),
			password: $('#password-input').val()?.toString(),
			possible_dev: {
				// massive: arr.map((v, i) => $(`#str-${i}`).val()),
				massive: getDeviceIDS(),
				count: 0
			}
		}

		socket.emit('all_inputs_validation', inputValues)
		console.table(inputValues)
		console.dir('trying to check register')
		is_ready_for_reg ? cb(is_ready_for_reg) : console.dir('not ready')
	}
}

export default new RegisterData()

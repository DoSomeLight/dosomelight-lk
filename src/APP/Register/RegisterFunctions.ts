import $ from 'jquery'
import { socket } from 'APP/socket.io'
import { counter, AdderInputID } from 'ROUTES/Register/DEPRECATED__adder_input/AdderInputID'

class RegisterData {
	public check_N_sendToRegister = (cb: (is_ready_for_reg: boolean) => void) => {
		let is_ready_for_reg = false
		const arr = new Array(counter + 1)

		const inputValues = {
			email: $('#email-input').val()?.toString(),
			login: $('#login-input').val()?.toString(),
			password: $('#password-input').val()?.toString(),
			possible_dev: {
				massive: arr.map((v, i) => $(`#str-${i}`).val()),
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

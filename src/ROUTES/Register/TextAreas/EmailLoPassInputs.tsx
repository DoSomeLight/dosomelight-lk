import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Email from '@material-ui/icons/Email'
import validator from 'validator'
import { socket } from 'APP/socket.io'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: '50%'
			},
			'& input:valid + fieldset': {
				borderColor: 'blue',
				borderWidth: 2
			},
			'& input:invalid + fieldset': {
				borderColor: 'black',
				borderWidth: 2
			},
			'& input:valid:focus + fieldset': {
				borderLeftWidth: 6,
				padding: '4px !important' // override inline-style
			}
		},
		margin: {
			margin: theme.spacing(1)
		},
		notfree_validate: {
			borderColor: 'red'
		},
		isfree_validate: {
			color: 'green'
		}
	})
)

const notFree = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& input:valid:not(:focus) + fieldset': {
				borderColor: 'red',
				borderWidth: 3
			},
			'& input:valid:focus + fieldset': {
				borderColor: 'red',
				borderWidth: 3
				// label: 'занято'
			}

			// display: 'flex',
			// flexWrap: 'wrap',
		},
		margin: {
			margin: '88',
			'& input:valid:focus + fieldset': {
				// borderColor: 'yellow',
				borderWidth: 6
			}
		}
	})
)

const isFree = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& input:valid:not(:focus) + fieldset': {
				borderColor: 'green',
				borderWidth: 3
			},
			'& input:valid:focus + fieldset': {
				borderColor: 'green',
				borderWidth: 3
			}

			// display: 'flex',
			// flexWrap: 'wrap',
		},
		margin: {
			margin: '88',
			'& input:valid:focus + fieldset': {
				// borderColor: 'yellow',
				borderWidth: 6
			}
		}
	})
)

let rescheck: any
let log_validation_check: any

const validateLogin = (
	{ target: { value: login } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	inputer: React.Dispatch<React.SetStateAction<string>>
) => {
	if (validator.isLength(login, { min: 6, max: undefined })) {
		console.dir('LENGHTHT LOGIN IS OK')
		socket.emit('login_input_validate', login)
	}
}

const validateEmail = (
	{ target: { value: email } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	inputer: React.Dispatch<React.SetStateAction<string>>
) => {
	if (validator.isEmail(email)) {
		console.log('is email = yes')
		socket.emit('reg_input_validate', email)
	} else {
		console.log('no')
		inputer('notanemail')
	}
}

const i_v = (update_initialiser: (a: string) => void) =>
	socket.on('validation_otvet', (otvet: string) => update_initialiser(otvet))

export default function EmailLoPassInputs(props: any) {
	// props.email_validation = 'NONE';
	const classes = useStyles()
	// let bbb: string = 'none';

	let _isFree = isFree()
	let _notFree = notFree()

	const [output, update_initialiser] = useState('2')

	if (output === 'isfree') {
		console.log('ДА')
		//bbb = output;
		rescheck = _isFree.root
	}
	if (output === 'notfree') {
		console.log('ЗАНЯТО')
		//bbb = output;
		rescheck = _notFree.root
	}
	if (output === 'notanemail') {
		rescheck = classes.root
	}

	if (output === 'loginisfree') {
		console.log('Login ДА')
		log_validation_check = _isFree.root
	}
	if (output === 'loginnotfree') {
		console.log('Login ЗАНЯТО')
		log_validation_check = _notFree.root
	}

	i_v(update_initialiser)

	socket.on('login_validation_otvet', (otvet: string) => {
		update_initialiser(otvet)
	})
	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					InputProps={{
						className: rescheck,
						startAdornment: (
							<InputAdornment position="start">
								<Email />
							</InputAdornment>
						)
						// endAdornment: ( //   <InputAdornment position="end"> //     <Email />//   </InputAdornment>// )
					}}
					onChange={event => validateEmail(event, update_initialiser)}
					required
					color="primary"
					id="email-input"
					label="Email"
					variant="outlined"
					size="small"
					fullWidth={true}
				/>
			</div>
			<div>
				<TextField
					InputProps={{
						className: log_validation_check
					}}
					required
					color="primary"
					id="login-input"
					label="Логин"
					// defaultValue="Hello World"
					variant="outlined"
					size="small"
					onChange={event => validateLogin(event, update_initialiser)}
					// value={bbb}
				/>

				<TextField
					required
					id="password-input"
					label="Пароль"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					size="small"
				/>
			</div>
		</form>
	)
}

type input_auth_type = 'loginInput' | 'passwordInput'

export default interface Auth__Login__Props {
	id: 'login' | 'password'
	css: `${input_auth_type}--auth`
}

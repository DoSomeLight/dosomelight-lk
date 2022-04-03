interface Auth__Button__Props {
	id: 'submit-btn' | 'forgot-password'
	css: 'button-Submit--auth' | 'button-Forgot-Password--auth'
	form: string
}

export default function AuthBtn({ css, form, id }: Auth__Button__Props) {
	let Type = id === 'submit-btn' ? 'submit' : 'button'
	return <input id={id} name={id} className={css} type={Type} value="Войти" form={form} />
}

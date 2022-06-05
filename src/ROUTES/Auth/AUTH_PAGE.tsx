import './styles/auth-styles.scss'
import './styles/auth--btn_small.scss'
import './styles/auth--submit_btn.scss'

export const AUTH_PAGE = () => (
	<div className="auth--wrapper">
		<form id="vhod" method="POST" className="auth--wrapper--form">
			<div className="auth--wrapper--form--align_left">
				<div className="auth--wrapper--form--label">Авторизация</div>
			</div>

			<div className="auth--wrapper--form--input_wrapper">
				<input id="login" name="login" type="text" placeholder="Имя" />
			</div>

			<div className="auth--wrapper--form--input_wrapper">
				<input id="password" name="password" type="password" placeholder="Пароль" />
			</div>

			<input
				id="submit-btn"
				name="submit-btn"
				type="submit"
				form="vhod"
				className="auth--submit_btn"
				value={'Вход'}
			/>

			<div className="auth--wrapper--form--align_right">
				<div className="auth--btn_small"> Регистрация</div>
			</div>

			<div className="clear"></div>
		</form>
	</div>
)

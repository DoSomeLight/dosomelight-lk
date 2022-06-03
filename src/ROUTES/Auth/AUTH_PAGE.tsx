import './auth-styles.scss'

export const AUTH_PAGE = () => (
	<div className="auth--wrapper">
		<form className="auth--wrapper--form">
			<div className="auth--wrapper--form--align_left">
				<h3 className="sign-in">Авторизация</h3>
			</div>

			<div className="auth--wrapper--form--input_wrapper">
				<input type="text" placeholder="Имя" />
			</div>

			<div className="auth--wrapper--form--input_wrapper">
				<input type="password" placeholder="Пароль" />
			</div>

			<div className="auth--wrapper--form--submit_btn"> Вход</div>

			<div className="auth--wrapper--form--align_right">
				<div className="registr"> Регистрация</div>
			</div>

			<div className="clear"></div>
		</form>
	</div>
)

import './auth-styles.scss'

export const AUTH_PAGE = () => (
	<div className="wrapper">
		<form className="form_main">
			<div className="wrapper-left">
				<h3 className="sign-in">Авторизация</h3>
			</div>

			<div className="clear"></div>

			<div className="div_in">
				<input type="text" placeholder="Имя" />
			</div>

			<div className="div_in">
				<input type="password" placeholder="Пароль" />
			</div>

			<div className="sign_in"> Вход</div>

			<div className="wrapper-right">
				<div className="registr"> Регистрация</div>
			</div>

			<div className="clear"></div>
		</form>
	</div>
)

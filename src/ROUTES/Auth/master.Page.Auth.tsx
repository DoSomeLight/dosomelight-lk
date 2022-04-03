import { BackStage, AuthTextArea, AuthBtn } from 'ROUTES/Auth'

export const AUTH_PAGE = () => (
	<div>
		<BackStage css="backStage--auth">
			<form className="formInput--auth" id="vhod" method="POST">
				{/* <button></button> */}

				<h3 className="nunun">Логин</h3>

				<AuthTextArea id="login" css="loginInput--auth" />

				<h3 className="nunun">Пароль</h3>

				<AuthTextArea id="password" css="passwordInput--auth" />

				<p></p>
			</form>
			<AuthBtn id="submit-btn" css="button-Submit--auth" form="vhod" />
		</BackStage>
	</div>
)

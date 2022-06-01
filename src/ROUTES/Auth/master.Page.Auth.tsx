import { BackStage, AuthTextArea, AuthBtn } from 'ROUTES/Auth'

export const AUTH_PAGE = () => (
	// <div>
	// 	<BackStage css="backStage--auth">
	// 		<form className="formInput--auth" id="vhod" method="POST">
	// 			{/* <button></button> */}

	// 			<h3 className="nunun">Логин</h3>

	// 			<AuthTextArea id="login" css="loginInput--auth" />

	// 			<h3 className="nunun">Пароль</h3>

	// 			<AuthTextArea id="password" css="passwordInput--auth" />

	// 			<p></p>
	// 		</form>
	// 		<AuthBtn id="submit-btn" css="button-Submit--auth" form="vhod" />
	// 	</BackStage>
	// </div>


<div className="wrapper">  
  <form  className="form_main">
	  <div className='wrapper-left'>
		  <h3 className="sign-in">Авторизация</h3>
		</div>
  <div className="clear"></div>  
	<div className='div_in'>
		 <input type="text" placeholder="Имя"/>
    </div> 
	<div className='div_in'>
		 <input type="password" placeholder="Пароль"/>
    </div>     
	<div className='sign_in'> Вход</div>
	<div className='wrapper-right'>
		<div className='registr'> Регистрация</div>
	</div>
	<div className="clear"></div>

  </form>  
</div>







)


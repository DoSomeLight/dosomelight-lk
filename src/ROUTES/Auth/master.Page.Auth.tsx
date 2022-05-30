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
  <div className="header">

  </div>
   
  <form  className="form_main">
  <h3 className="sign-in">Авторизация</h3>

  <div className="clear"></div>  
	  <div>
         <label className="user" htmlFor="text">
           <svg viewBox="0 0 32 32">
                    <g filter="">
                      {/* <use xlink:href="#man-people-user"></use> */}
                    </g>
                  </svg>
         </label>
        <input className="user-input" type="text" name="name" id="name" placeholder="Ввод имени"  />
      </div> 
      <div>
        <label className="lock" htmlFor="Пароль">
          <svg viewBox="0 0 32 32">
             <g filter="">
               {/* <use xlink:href="#lock-locker"></use> */}
              </g>
            </svg>  
        </label>
        <input type="password" name="name" id="name" placeholder="" />
      </div> 
     <div>
      <input type="submit" value="Вход" />
    </div>    
	<div className='registr'> Регистрация</div>
	  <div className="clear"></div>

  </form>  
</div>







)


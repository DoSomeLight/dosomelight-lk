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
    <h3 className="sign-in">Sign in</h3>
    <div className="button">
      Register
    </div>
  </div>
   <div className="clear"></div> 
  <form>
      <div>
         <label className="user" htmlFor="text">
           <svg viewBox="0 0 32 32">
                    <g filter="">
                      {/* <use xlink:href="#man-people-user"></use> */}
                    </g>
                  </svg>
         </label>
        <input className="user-input" type="text" name="name" id="name" placeholder="My name is"  />
      </div> 
      <div>
        <label className="lock" htmlFor="password">
          <svg viewBox="0 0 32 32">
             <g filter="">
               {/* <use xlink:href="#lock-locker"></use> */}
              </g>
            </svg>  
        </label>
        <input type="password" name="name" id="name" placeholder="" />
      </div> 
     <div>
      <input type="submit" value="Sign in" />
    </div>
    {/* <div className="radio-check">   
      <input type="radio" className="radio-no" id="no" name="remember" value="no" checked>
      <label className="no"><i className="fa fa-times"></i></label>  
      <input type="radio" className="radio-yes" id="yes" name="remember" value="yes">
      <label className="yes"><i className="fa fa-check"></i></label>
      <span className="switch-selection"></span>
    </div> */}
      <span className="check-label">Remember me</span>
      <span className="forgot-label">Lost your password?</span>
      <div className="clear"></div>
  </form>  
</div>







)


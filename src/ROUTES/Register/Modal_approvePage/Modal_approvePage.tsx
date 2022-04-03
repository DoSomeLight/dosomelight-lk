export const Modal_approvePage = ({ email, login }: { email: string; login: string }) => (
	<div id="myModal" className="">
		<div className="">
			{/* <span className="close">&times;</span> */}
			<p>Некоторый текст в модальном..</p>
			Проверьте ваши данные перед подтверждением
			<br></br>и активируйте прибор с помощью кнопки на его корпусе<br></br>
			email -{email}
			<br></br>
			login - {login}
			<br></br>
		</div>
	</div>
)

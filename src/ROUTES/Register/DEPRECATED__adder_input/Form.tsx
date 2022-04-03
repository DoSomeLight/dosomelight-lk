import React, { useState } from 'react'
import { Add_IDinputBTN } from '../Components/Buttons/Buttons'

function Form(props: any) {
	const [name, setName] = useState('')

	function handleSubmit(e: any) {
		props.addTask(name)
		setName('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<h4 className="label-wrapper">
				<label htmlFor="new-todo-input" className="label__lg">
					{/* Вы можете создать пустой аккаунт - без устройств,<br></br> либо добавить их ниже  */}
					Чтобы зарегистрировать аккаунт,<br></br> необходимо минимум одно
					новое(НЕактивированное) устройтсво
				</label>
			</h4>
			<Add_IDinputBTN onClick={handleSubmit} />
		</form>
	)
}

export { Form }

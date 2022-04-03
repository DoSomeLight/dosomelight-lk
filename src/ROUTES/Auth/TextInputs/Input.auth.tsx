import { Auth__Login__Props } from 'interfaces/Auth'

export default function AuthTextArea({ css, id }: Auth__Login__Props) {
	let Name = id === 'login' ? 'login' : id === 'password' ? 'password' : '0'
	let Type = id === 'login' ? 'text' : id === 'password' ? 'password' : '0'
	return (
		<div>
			<input
				id={id}
				className={css}
				autoComplete="off"
				name={Name}
				type={Type}
				required
				autoFocus
			/>
		</div>
	)
}

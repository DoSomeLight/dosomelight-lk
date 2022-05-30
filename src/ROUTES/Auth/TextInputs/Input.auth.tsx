import { Auth__Login__Props } from 'interfaces/Auth'

export default function AuthTextArea({ css, id }: Auth__Login__Props) {
	const name = id === 'login' ? 'login' : id === 'password' ? 'password' : '0'
	const type = id === 'login' ? 'text' : id === 'password' ? 'password' : '0'
	return (
		<div>
			<input
				id={id}
				className={css}
				autoComplete="off"
				{...{ name, type }}
				required
				autoFocus
			/>
		</div>
	)
}

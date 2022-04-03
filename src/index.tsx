import registerServiceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import 'assets/styles/index.scss'
import { LICHNIY_KABINET } from 'ROUTES/LK/Page.Lichniy_Kabinet'
import { AUTH_PAGE } from 'ROUTES/Auth/master.Page.Auth'
import { REGISTER_PAGE } from 'ROUTES/Register/master.Page.Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
	<div>
		<meta charSet="utf-8" />
		<title>Умный дом</title>
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<AUTH_PAGE />} />
				<Route path="/register" element={<REGISTER_PAGE />} />
				<Route path="/" element={<LICHNIY_KABINET />} />
			</Routes>
		</BrowserRouter>
	</div>
)
registerServiceWorker()
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

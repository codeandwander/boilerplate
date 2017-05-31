import React from 'react'
import { 
	Route,
	BrowserRouter as Router 
} from 'react-router-dom'

import { Header } from './components'
import routes from '../../config/routes'

const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={props => (
		<route.component {...props} routes={route.routes}/>
	)}/>
)

const App = (
	<Router>
		<div>
			<Header />

			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route}/>
			))}
		</div>
	</Router>
)

export default App
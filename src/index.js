import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Browse from './views/Browse';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
			<Route exact path='/' component={App}></Route>
			<Route path='/browse' component={Browse}></Route>
			<Route path='/dashboard' component={Dashboard}></Route>
			<Route path='/profile' component={Profile}></Route>
		</div>

	</Router>

	,
	document.getElementById('root'));
registerServiceWorker();

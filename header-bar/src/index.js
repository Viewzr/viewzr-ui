import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Browse from './pages/browse';
import CreatorDashboard from './pages/creator-dashboard';
import Profile from './pages/profile';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
			<Route exact path='/' component={App}></Route>
			<Route exact path='/browse' component={Browse}></Route>
			<Route exact path='/creatordashboard' component={CreatorDashboard}></Route>
			<Route exact path='/profile' component={Profile}></Route>
		</div>
	</Router>
	, 
	document.getElementById('root'));
registerServiceWorker();

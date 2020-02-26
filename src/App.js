import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { List, Shorten, Home, Login, Signup } from './pages';
import Template from './components/Template';

function App() {
	return (
		<div>
			{/* <Template />
			<Route exact path="/" component={Home} />
			<Switch>
				<Route path="/list" component={List} />
				<Route path="/shorten" component={Shorten} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</Switch> */}
		</div>
	);
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Main, Signup } from './pages';
import Template from './components/Template';

class App extends Component {
	constructor(props) {
		sueper(props);
		this.state = {
			isLogin: false
		};
	}
	render() {
		const { isLogin } = this.state;
		return (
			<div>
				<Switch>
					<Route path="/home" render={() => <Home />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/main" render={() => <Main />} />
					<Route path="/signup" render={() => <Signup />} />
					<Route
						path="/"
						render={() => {
							if (isLogin) {
								return <Redirect to="/main" />;
							}
							return <Redirect to="/home" />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;

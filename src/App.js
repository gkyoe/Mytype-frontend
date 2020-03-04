import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Login, Main, Signup } from './pages';
import * as LoginActions from './modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (localStorage.getItem('token')) {
			this.props.LoginActions.keepLoginState();
		}
		const { isLogin } = this.props;
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
							return <Redirect to="/Home" />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default connect(
	state => ({
		isLogin: state.login.isLogin
	}),
	dispatch => ({
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(App);

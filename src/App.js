import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Main, Signup } from './pages';
import Template from './components/Template';

// function App() {
// return (
// 	<div>
// 		<Switch>
// 			<Route path='/home' render={() => <Home />} />
// 			<Route path='/login' render={() => <Login />} />
// 			<Route path='/Main' render={() => <Main />} />
// 			<Route path='/Signup' render={() => <Signup />} />

// 			<Route path='/' render={() => <Home />} />
// 		</Switch>
// 	</div>
// );
// }

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
					<Route path="/Main" render={() => <Main />} />
					<Route path="/Signup" render={() => <Signup />} />

					<Route
						path="/"
						render={() => {
							if (isLogin) {
								return <Redirect to="/mypage" />;
							}
							return <Redirect to="/login" />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;

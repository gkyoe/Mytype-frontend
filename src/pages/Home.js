import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeCategory from '../components/Home/HomeCategory';
import { Loginout } from '../components/Main';
import './Home.css';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isLogin } = this.props;
		return (
			<div>
				<div className="h-buttons">
					<Loginout isLogin={isLogin} />
				</div>
				<center>
					<div>
						<h1>my type</h1>
					</div>
					<div>
						<HomeCategory />
					</div>
				</center>
			</div>
		);
	}
}

Home = connect(
	state => ({
		isLogin: state.login.isLogin
	}),
	null
)(Home);

export default withRouter(Home);

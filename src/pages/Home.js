import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HomeCategory from '../components/Home/HomeCategory';
import * as changeMainContent from '../modules/changeMainContent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loginout } from '../components/Main';

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
					{/* <Link to="/login">
						<button className="login-signup-button">로그인</button>
					</Link>
					<Link to="/signup">
						<button className="login-signup-button">회원가입</button>
					</Link> */}
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

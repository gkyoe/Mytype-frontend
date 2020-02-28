import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HomeCategory from '../components/Home/HomeCategory';
import * as changeMainContent from '../modules/changeMainContent';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="h-buttons">
					<Link to="/login">
						<button className="login-signup-button">로그인</button>
					</Link>
					<Link to="/signup">
						<button className="login-signup-button">회원가입</button>
					</Link>
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

export default Home;

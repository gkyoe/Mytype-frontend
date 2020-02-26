import React, { Component } from 'react';
import {
	ContentList,
	MainCategory,
	MainContentBox,
	UserCategory
} from '../components/Main';
import './Main.css';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Main">
				<div className="col15 float_left">
					<MainCategory />
					<UserCategory />
				</div>
				<div className="col80 float_left">
					<div className="height100">
						<button className="logout_button">로그아웃</button>
					</div>
					<MainContentBox />
					<ContentList />
				</div>

				{/* <UserCategory />
			<MainContentBox />
			<ContentList /> */}
			</div>
		);
	}
}

export default Main;

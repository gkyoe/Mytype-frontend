import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	ContentList,
	MainCategory,
	MainContentBox,
	UserCategory
} from '../components/Main';
import './Main.css';
import * as MainCategoryActions from '../modules/changeMainContent';

class Main extends Component {
	render() {
		const { mainVideo, videoList } = this.props;
		if (mainVideo === null) return <h1>Loading...</h1>;
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
					<MainContentBox mainVideo={mainVideo} />
					<ContentList videoList={videoList} />
				</div>
			</div>
		);
	}
}

// export default Main;
export default connect(
	state => ({
		mainVideo: state.changeMainContent.mainVideo,
		videoList: state.changeMainContent.videoList
	}),
	dispatch => ({
		MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch)
	})
)(Main);

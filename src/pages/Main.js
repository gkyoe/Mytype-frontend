import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	ContentList,
	MainCategory,
	MainContentBox,
	UserCategory,
	Loginout,
	Modal
} from '../components/Main';
import './Main.css';
import * as MainCategoryActions from '../modules/changeMainContent';
import * as ChangeModalState from '../modules/changeModalState';

class Main extends Component {
	render() {
		const { mainVideo, videoList, isLogin } = this.props;
		if (mainVideo === null) return <h1>Loading...</h1>;
		return (
			<div className="Main">
				<div className="col15 float_left">
					<MainCategory />
					<UserCategory />
				</div>
				<div className="col80 float_left">
					<div className="height100">
						<Loginout isLogin={isLogin} />
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
		videoList: state.changeMainContent.videoList,
		isLogin: state.login.isLogin,
		modalOn: state.changeModalState.modalOn,
		modalType: state.changeModalState.modalType
	}),
	dispatch => ({
		MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch),
		ChangeModalState: bindActionCreators(ChangeModalState, dispatch)
	})
)(Main);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reactModal from 'react-modal';
import { withRouter } from 'react-router-dom';
import {
	ContentList,
	MainCategory,
	MainContentBox,
	UserCategory,
	Loginout
} from '../components/Main';
import './Main.css';
import * as MainCategoryActions from '../modules/changeMainContent';
import * as ChangeModalState from '../modules/changeModalState';
import * as UserCategoryData from '../modules/userCategoryData';
import * as LoginActions from '../modules/login';

reactModal.setAppElement(document.getElementById('root'));

class Main extends Component {
	componentDidMount() {
		if (this.props.isLogin) {
			this.props.UserCategoryData.getUserCategoryList().then(result => {
				if (result === 'need login') {
					alert('로그인이 필요합니다.');
					this.props.LoginActions.logout();
					localStorage.removeItem('token');
					this.props.history.push('/login');
				}
			});
		}
		if (this.props.mainVideo === null) {
			this.props.MainCategoryActions.getVideos(1);
		}
	}

	render() {
		const { mainVideo, videoList, isLogin } = this.props;
		if (mainVideo === null) return <h1>Loading...</h1>;
		return (
			<div className="Main">
				<div className="col15 float_left">
					<MainCategory />
					<UserCategory isLogin={isLogin} />
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
Main = connect(
	state => ({
		mainVideo: state.changeMainContent.mainVideo,
		videoList: state.changeMainContent.videoList,
		isLogin: state.login.isLogin,
		modalOn: state.changeModalState.modalOn,
		modalType: state.changeModalState.modalType
	}),
	dispatch => ({
		MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch),
		ChangeModalState: bindActionCreators(ChangeModalState, dispatch),
		UserCategoryData: bindActionCreators(UserCategoryData, dispatch),
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(Main);

export default withRouter(Main);

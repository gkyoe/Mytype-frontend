import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reactModal from 'react-modal';
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

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

reactModal.setAppElement(document.getElementById('root'));

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSource: '',
			modalIsOpen: false,
			nowEditing: false,
			nowSaving: false,
			currentItem: {
				id: null,
				body: null,
				status: null
			}
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState(prevState => ({
			modalIsOpen: !prevState.modalIsOpen
		}));
	}

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

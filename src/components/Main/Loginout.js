import React from 'react';
import { withRouter } from 'react-router-dom';
import * as LoginActions from '../../modules/login';
import * as UserCategoryDataActions from '../../modules/userCategoryData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Loginout.css';
import Modal from 'react-modal';
import CheckLogout from './CheckLogout';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		height: '100px'
	}
};

let Loginout = props => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	if (props.isLogin) {
		return (
			<div>
				<button
					// onClick={() => {
					// 	props.LoginActions.logout();
					// 	props.UserCategoryDataActions.initUserCategoryList();
					// 	localStorage.removeItem('token');
					// }}
					className="logout_button"
					onClick={openModal}
				>
					로그아웃
				</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					{/* <ModalBox
						isDeleteModal={props.isDeleteModal}
						closeModal={closeModal}
					/> */}
					<CheckLogout closeModal={closeModal} />
				</Modal>
			</div>
		);
	} else {
		return (
			<div>
				<button
					onClick={() => {
						props.history.push('/login');
					}}
					className="login_button"
				>
					로그인
				</button>
				<button
					onClick={() => {
						props.history.push('/signup');
					}}
					className="logout_button"
				>
					회원가입
				</button>
			</div>
		);
	}
};

Loginout = connect(null, dispatch => ({
	LoginActions: bindActionCreators(LoginActions, dispatch),
	UserCategoryDataActions: bindActionCreators(UserCategoryDataActions, dispatch)
}))(Loginout);

export default withRouter(Loginout);

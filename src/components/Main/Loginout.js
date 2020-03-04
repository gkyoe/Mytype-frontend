import React from 'react';
import { withRouter } from 'react-router-dom';
import * as LoginActions from '../../modules/login';
import * as UserCategoryDataActions from '../../modules/userCategoryData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let Loginout = props => {
	if (props.isLogin) {
		return (
			<div>
				<button
					onClick={() => {
						props.LoginActions.logout();
						props.UserCategoryDataActions.initUserCategoryList();
						localStorage.removeItem('token');
					}}
					className="logout_button"
				>
					로그아웃
				</button>
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

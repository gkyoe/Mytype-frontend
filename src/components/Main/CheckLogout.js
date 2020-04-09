import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../../modules/login';
import * as UserCategoryDataActions from '../../modules/userCategoryData';

const CheckLogout = props => {
	return (
		<div className="check-logout-modal">
			<div className="check-logout-title">정말 로그아웃 하시겠습니까?</div>
			<button
				className="check-logout-yes"
				onClick={() => {
					props.LoginActions.logout();
					props.UserCategoryDataActions.initUserCategoryList();
					localStorage.removeItem('token');
					props.closeModal();
				}}
			>
				예
			</button>
			<button className="check-logout-no" onClick={props.closeModal}>
				아니오
			</button>
		</div>
	);
};

export default connect(null, dispatch => ({
	LoginActions: bindActionCreators(LoginActions, dispatch),
	UserCategoryDataActions: bindActionCreators(UserCategoryDataActions, dispatch)
}))(CheckLogout);

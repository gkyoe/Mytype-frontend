import React from 'react';
import { withRouter } from 'react-router-dom';

const Loginout = props => {
	console.log(props.isLogin);
	if (props.isLogin) {
		return (
			<div className="height100">
				<button className="logout_button">로그아웃</button>
			</div>
		);
	} else {
		return (
			<div className="height100">
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

export default withRouter(Loginout);

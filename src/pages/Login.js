import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../modules/login';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			googleId: '',
			googleName: '',
			provider: '',
			email: '',
			password: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
	}

	responseGoogle = res => {
		console.log(res);
		this.setState({
			googleId: res.googleId,
			googleName: res.profileObj.name,
			provider: 'google'
		});
		this.props.LoginActions.postLogin({
			googleId: res.googleId,
			googleName: res.profileObj.name
		});
	};

	responseFail = err => {
		console.error(err);
	};

	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value });
	};

	render() {
		const { LoginActions } = this.props;
		if (this.props.loginResponse === true) {
			alert('로그인에 성공하였습니다.');
			LoginActions.initLoginState();
			this.props.history.push('/main');
		} else if (this.props.loginResponse === false) {
			alert('존재하지 않는 이메일 또는 비밀번호입니다.');
			LoginActions.initLoginState();
		}
		const data = {
			email: this.state.email,
			password: this.state.password
		};
		return (
			<div>
				<center>
					<div className="login-box">
						<h2 className="login-page-title">로그인</h2>
						<table className="login-table">
							<tr>
								<th className="login-tb-left">이메일</th>
								<td className="login-tb-right">
									<input
										onChange={this.handleInputValue('email')}
										className="login-input-box"
										type="email"
										name="email"
										placeholder="이메일을 입력 해주세요"
									/>
								</td>
							</tr>
							<tr>
								<th className="login-tb-left">비밀번호</th>
								<td className="login-tb-right">
									<input
										onChange={this.handleInputValue('password')}
										className="login-input-box"
										type="password"
										name="password"
										placeholder="비밀번호를 입력 해주세요"
									/>
								</td>
							</tr>
						</table>
						<div>
							<button
								onClick={() => LoginActions.postLogin(data)}
								className="login-submit-button"
							>
								로그인
							</button>
							<Link to="./signup">
								<button className="loginpage-signup-submit-button">
									회원가입
								</button>
							</Link>
						</div>
						{/* <Container> */}
						<GoogleLogin
							className="google-login-button"
							clientId="97217631103-uarelmceomavabiq17mbo6fu2tuihkmp.apps.googleusercontent.com"
							buttonText="Google로 로그인하기"
							onSuccess={this.responseGoogle}
							onFailure={this.responseFail}
						/>
						{/* </Container> */}
					</div>
				</center>
			</div>
		);
	}
}

const Container = styled.div`
	// display: flex;
	// flex-flow: cloumn wrap;
`;

Login = connect(
	state => ({
		loginResponse: state.login.loginResponse
	}),
	dispatch => ({
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(Login);

export default withRouter(Login);

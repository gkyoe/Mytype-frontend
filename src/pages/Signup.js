import React, { Component } from 'react';
import './Signup.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../modules/login';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			username: '',
			repassword: '',
			phonenumber: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
	}

	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value });
	};

	render() {
		const { LoginActions } = this.props;
		if (this.props.signupResponse === true) {
			alert('회원가입이 완료되었습니다');
			this.props.history.push('/login');
			LoginActions.initSignupState();
		} else if (this.props.signupResponse === false) {
			alert('이미 존재하는 이메일입니다');
			LoginActions.initSignupState();
		}
		let data = {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
			mobile: this.state.phonenumber
		};
		return (
			<div>
				<center>
					<h2 className="signup-page-title">회원가입</h2>
					<table className="signup-table">
						<tr>
							<th className="signup-tb-left">이메일</th>
							<td className="signup-tb-right">
								<input
									className="signup-input-box"
									type="email"
									name="email"
									placeholder="이메일을 입력 해주세요"
									onChange={this.handleInputValue('email')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left">비밀번호</th>
							<td className="signup-tb-right">
								<input
									className="signup-input-box"
									type="password"
									name="password"
									placeholder="비밀번호를 입력 해주세요"
									onChange={this.handleInputValue('password')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left" style={{ fontSize: '11pt' }}>
								비밀번호 확인
							</th>
							<td className="signup-tb-right">
								<input
									className="signup-input-box"
									type="password"
									name="password"
									placeholder="비밀번호를 다시 입력 해주세요"
									onChange={this.handleInputValue('repassword')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left">이름</th>
							<td className="signup-tb-right">
								<input
									className="signup-input-box"
									type="text"
									name="text"
									placeholder="이름을 입력해주세요"
									onChange={this.handleInputValue('username')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left">휴대폰번호</th>
							<td className="signup-tb-right">
								<input
									className="signup-input-box"
									type="tel"
									name="tel"
									placeholder="휴대폰 번호를 입력 해주세요"
									pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
									onChange={this.handleInputValue('phonenumber')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left"></th>
							<td className="table-right-submit">
								<button
									// 여기 다음에 파라미터전달?
									onClick={() => {
										return LoginActions.postSignup(data);
									}}
									className="signup-submit-button"
								>
									제출
								</button>
							</td>
						</tr>
					</table>
				</center>
			</div>
		);
	}
}

Signup = connect(
	state => ({
		signupResponse: state.login.signupResponse
	}),
	dispatch => ({
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(Signup);

export default withRouter(Signup);

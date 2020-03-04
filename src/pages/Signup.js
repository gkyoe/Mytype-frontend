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
			repassword: '',
			username: '',
			phonenumber: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
		this.addAutoHypen = this.addAutoHypen.bind(this);
		this.handleInputValueAutoHypen = this.handleInputValueAutoHypen.bind(this);
		this.doesPasswordMatch = this.doesPasswordMatch.bind(this);
		this.renderFeedbackMessage = this.renderFeedbackMessage.bind(this);
		this.handleInputValueAutoHypen = this.handleInputValueAutoHypen.bind(this);
	}

	// input에 들어오는 데이터를 state를 입력하는 함수
	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value });
	};

	// 휴대폰 번호를 입력할 때 자동으로 하이픈('-')이 달리고, 입력 길이 제한이 되는 함수
	addAutoHypen = str => {
		str = str.replace(/[^0-9]/g, '');
		var tmp = '';
		var maxLength = 11;

		if (str.length > maxLength) {
			str = str.slice(0, maxLength);
		}
		if (str.length < 4) {
			return str;
		} else if (str.length < 7) {
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3);
			return tmp;
		} else if (str.length < 11) {
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 3);
			tmp += '-';
			tmp += str.substr(6);
			return tmp;
		} else {
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 4);
			tmp += '-';
			tmp += str.substr(7);
			return tmp;
		}
		return str;
	};

	// password 와 repassword 가 일치하는 확인하여 boolean 값 출력하는 함수
	doesPasswordMatch() {
		const { password, repassword } = this.state;
		return password === repassword;
	}

	// 비밀번호가 일치하지 않으면 '패스워드가 일치하지 않습니다' 메세지를 출력하는 함수
	renderFeedbackMessage() {
		const { repassword } = this.state;

		if (repassword) {
			if (!this.doesPasswordMatch()) {
				return (
					<div className="invalid-feedback" style={{ fontSize: '11pt' }}>
						비밀번호가 일치하지 않습니다
					</div>
				);
			}
		}
	}

	// 전화번호에 자동으로 하이픈을 넣어서 출력하고 state를 변경하는 함수
	handleInputValueAutoHypen = key => e => {
		e.target.value = this.addAutoHypen(e.target.value);
		this.setState({ [key]: this.addAutoHypen(e.target.value) });
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
									// onChange={this.handleInputValue('password')}
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
								{this.renderFeedbackMessage()}
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
									onChange={this.handleInputValueAutoHypen('phonenumber')}
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left"></th>
							<td className="table-right-submit">
								<button
									// 여기 다음에 파라미터전달?
									onClick={e => {
										if (this.state.password !== this.state.repassword) {
											e.preventDefault();
											alert('비밀번호가 일치하지 않습니다.');
										} else {
											for (let key in data) {
												if (data[key] === '') {
													return alert(`${key}를 입력해주세요.`);
												}
											}
											return LoginActions.postSignup(data);
										}
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

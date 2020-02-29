import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Router } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	render() {
		return (
			<div>
				<center>
					<h2 className="login-page-title">로그인</h2>
					<table className="login-table">
						<tr>
							<th className="login-tb-left">이메일</th>
							<td className="login-tb-right">
								<input
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
									className="login-input-box"
									type="password"
									name="password"
									placeholder="비밀번호를 입력 해주세요"
								/>
							</td>
						</tr>
					</table>
					<div>
						<button className="login-submit-button">로그인</button>
						<Link to="./signup">
							<button className="loginpage-signup-submit-button">
								회원가입
							</button>
						</Link>
					</div>
				</center>
			</div>
		);
	}
}

export default Login;

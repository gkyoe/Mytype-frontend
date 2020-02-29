import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			username: '',
			phonenumber: ''
		};
	}

	render() {
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
								/>
							</td>
						</tr>
						<tr>
							<th className="signup-tb-left"></th>
							<td className="table-right-submit">
								<button className="signup-submit-button">제출</button>
							</td>
						</tr>
					</table>
				</center>
			</div>
		);
	}
}

export default Signup;

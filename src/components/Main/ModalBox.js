import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Link } from 'react-router-dom';
import * as LoginState from '../../modules/login';
import * as addUserCategoryAction from '../../modules/addUserCategoryEntry';
import axios from 'axios';

class ModalBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
		this.closeModalAndSendInputVal = this.closeModalAndSendInputVal.bind(this);
	}

	handleInputValue = key => e => {
		console.log(e.target.value);
		this.setState({ inputValue: e.target.value });
		console.log(this.state);
	};

	closeModalAndSendInputVal = () => {
		const { AddUserCategoryAction, closeModal } = this.props;
		const sendInputValue = {
			categoryName: this.state.inputValue
		};

		AddUserCategoryAction.addUserCategoryEntry(sendInputValue).then(
			closeModal()
		);
	};

	render() {
		const { isLogin, categoryName } = this.props;
		console.log(isLogin);

		return (
			<div>
				{isLogin ? (
					<div className="modal">
						<input
							className="category-name-input"
							placeholder="카테고리명을 입력해주세요"
							onChange={this.handleInputValue('inputValue')}
						></input>
						<button
							className="modal-button"
							onClick={this.closeModalAndSendInputVal}
						>
							추가
						</button>
						<button
							type="submit"
							className="modal-button"
							onClick={this.props.closeModal}
						>
							닫기
						</button>
					</div>
				) : (
					<div>
						<div>로그인 하시겠습니까?</div>
						<Link to="./Login">
							<button>로그인</button>
						</Link>
						<button className="modal-button" onClick={this.props.closeModal}>
							닫기
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		isLogin: state.login.isLogin,
		categoryName: state.addUserCategoryEntry.categoryName
	}),
	dispatch => ({
		AddUserCategoryAction: bindActionCreators(addUserCategoryAction, dispatch)
	})
)(ModalBox);

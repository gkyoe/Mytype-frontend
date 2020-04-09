import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as UserCategoryDataActions from '../../modules/userCategoryData';
import * as ChangeModalStateActions from '../../modules/changeModalState';
import * as LoginActions from '../../modules/login';

class ModalBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			selected: '카테고리 선택'
		};
		this.handleInputValue = this.handleInputValue.bind(this);
		this.handleSelectedValue = this.handleSelectedValue.bind(this);
		this.handleEnterButton = this.handleEnterButton.bind(this);
	}

	handleEnterButton(data) {
		if (window.event.keyCode === 13) {
			this.props.UserCategoryDataActions.postAddUserCategory(data).then(
				result => {
					if (result === 'need login') {
						alert('로그인이 필요합니다.');
						this.props.LoginActions.logout();
						localStorage.removeItem('token');
						this.props.history.push('/login');
					} else {
						alert('추가되었습니다.');
						this.props.UserCategoryDataActions.getUserCategoryList();
						return this.props.closeModal();
					}
				}
			);
		}
	}

	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value });
	};

	handleSelectedValue(event) {
		this.setState({
			selected: event.target.value
		});
	}

	render() {
		const {
			isLogin,
			closeModal,
			UserCategoryDataActions,
			history,
			ChangeModalStateActions,
			isDeleteModal,
			userCategoryList
		} = this.props;
		const data = {
			categoryName: this.state.inputValue
		};
		const data2 = {
			categoryName: this.state.selected
		};
		if (isDeleteModal) {
			if (isLogin) {
				return (
					<div className="user-category-list-modal">
						<select
							className="category-select-box"
							value={this.state.selected}
							onChange={this.handleSelectedValue}
						>
							<option value="카테고리 선택">카테고리 선택</option>
							{userCategoryList.map(x => {
								return <option value={x}>{x}</option>;
							})}
						</select>
						<button
							className="add-button-in-modal"
							onClick={() => {
								UserCategoryDataActions.postDeleteUserCategory(data2).then(
									result => {
										if (result === 'need login') {
											alert('로그인이 필요합니다.');
											this.props.LoginActions.logout();
											localStorage.removeItem('token');
											closeModal();
											this.props.history.push('/login');
										} else {
											UserCategoryDataActions.getUserCategoryList();
											return closeModal();
										}
										return;
									}
								);
							}}
						>
							삭제
						</button>
						<button
							className="close-button-in-modal"
							onClick={() => {
								ChangeModalStateActions.toFalse();
								closeModal();
							}}
						>
							닫기
						</button>
					</div>
				);
			} else {
				return (
					<div className="user-category-list-modal">
						<h3 className="alert-in-modal">로그인이 필요한 서비스입니다</h3>
						<button
							className="add-button-in-modal"
							onClick={() => {
								closeModal();
								history.push('/login');
							}}
						>
							로그인
						</button>
						<button className="close-button-in-modal" onClick={closeModal}>
							닫기
						</button>
					</div>
				);
			}
		}
		if (isLogin) {
			return (
				<div className="modal">
					<input
						className="category-name-input"
						placeholder="카테고리명을 입력해주세요"
						onKeyUp={() => this.handleEnterButton(data)}
						onChange={this.handleInputValue('inputValue')}
					/>
					<button
						className="modal-button1"
						onClick={() => {
							UserCategoryDataActions.postAddUserCategory(data).then(result => {
								if (result === 'need login') {
									alert('로그인이 필요합니다.');
									this.props.LoginActions.logout();
									localStorage.removeItem('token');
									this.props.history.push('/login');
								} else {
									alert('추가되었습니다.');
									return UserCategoryDataActions.getUserCategoryList();
								}
							});
							return this.props.closeModal();
						}}
					>
						추가
					</button>
					<button className="modal-button2" onClick={this.props.closeModal}>
						닫기
					</button>
				</div>
			);
		} else {
			return (
				<div className="user-category-list-modal">
					<h3 className="alert-in-modal">로그인이 필요한 서비스입니다</h3>
					<button
						className="add-button-in-modal"
						onClick={() => {
							closeModal();
							history.push('/login');
						}}
					>
						로그인
					</button>
					<button className="close-button-in-modal" onClick={closeModal}>
						닫기
					</button>
				</div>
			);
		}
	}
}

ModalBox = connect(
	state => ({
		isLogin: state.login.isLogin,
		userCategoryList: state.userCategoryData.userCategoryList
	}),
	dispatch => ({
		UserCategoryDataActions: bindActionCreators(
			UserCategoryDataActions,
			dispatch
		),
		ChangeModalStateActions: bindActionCreators(
			ChangeModalStateActions,
			dispatch
		),
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(ModalBox);

export default withRouter(ModalBox);

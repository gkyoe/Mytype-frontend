import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as UserCategoryDataActions from '../../modules/userCategoryData';
import * as LoginActions from '../../modules/login';

class UserCategoryListModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: '카테고리 선택'
		};
		this.handleSelectedValue = this.handleSelectedValue.bind(this);
	}

	handleSelectedValue(event) {
		this.setState({
			selected: event.target.value
		});
	}

	render() {
		const {
			isLogin,
			userCategoryList,
			closeModal,
			history,
			mainVideo
		} = this.props;
		const data = {
			categoryName: this.state.selected,
			video: mainVideo
		};
		if (!isLogin) {
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
		} else {
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
							this.props.UserCategoryDataActions.postVideoToUserCategory(
								data
							).then(result => {
								if (!result) {
									return closeModal();
								} else if (result === 'need login') {
									alert('로그인이 필요합니다.');
									this.props.LoginActions.logout();
									localStorage.removeItem('token');
									closeModal();
									this.props.history.push('/login');
								}
							});
						}}
					>
						추가
					</button>
					<button className="close-button-in-modal" onClick={closeModal}>
						닫기
					</button>
				</div>
			);
		}
	}
}

UserCategoryListModal = connect(
	state => ({
		isLogin: state.login.isLogin,
		userCategoryList: state.userCategoryData.userCategoryList
	}),
	dispatch => ({
		UserCategoryDataActions: bindActionCreators(
			UserCategoryDataActions,
			dispatch
		),
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(UserCategoryListModal);

export default withRouter(UserCategoryListModal);

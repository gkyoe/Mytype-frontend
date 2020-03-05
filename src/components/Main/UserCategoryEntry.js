import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as MainCategoryActions from '../../modules/changeMainContent';
import * as LoginActions from '../../modules/login';

let UserCategoryEntry = props => {
	return (
		<div className="UserCategoryEntry">
			<button
				onClick={e =>
					props.MainCategoryActions.postUserCategoryVideos({
						categoryName: e.target.textContent
					}).then(result => {
						if (result === 'need lozxgin') {
							alert('로그인이 필요합니다.');
							props.LoginActions.logout();
							localStorage.removeItem('token');
							props.history.push('/login');
						}
					})
				}
				className="user-category-entry-button"
			>
				{props.category}
			</button>
		</div>
	);
};

UserCategoryEntry = connect(null, dispatch => ({
	MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch),
	LoginActions: bindActionCreators(LoginActions, dispatch)
}))(UserCategoryEntry);

export default withRouter(UserCategoryEntry);

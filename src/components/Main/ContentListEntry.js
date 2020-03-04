import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainCategoryActions from '../../modules/changeMainContent';
import axios from 'axios';
import * as LoginActions from '../../modules/login';
import { withRouter } from 'react-router-dom';

let ContentListEntry = props => {
	const { MainCategoryActions, video, selectedUserCategory, isEditing } = props;
	const title = video.snippet.title.substring(0, 18) + '...';
	const description = video.snippet.description.substring(0, 40) + '...';
	const data = {
		categoryName: selectedUserCategory,
		video: video
	};
	const postDeleteVideoInUserCategory = data => {
		return axios.post('http://18.191.169.207:3001/user/deleteVideo', data, {
			headers: {
				authorization: JSON.stringify(localStorage.getItem('token'))
			}
		});
	};
	return (
		<div className="ContentListEntry">
			{isEditing && (
				<button
					onClick={() => {
						postDeleteVideoInUserCategory(data)
							.then(result => {
								if (result.status === 200) {
									MainCategoryActions.postUserCategoryVideos({
										categoryName: selectedUserCategory
									});
								}
							})
							.catch(err => {
								if (err.response.status === 401) {
									alert('로그인이 필요합니다.');
									props.LoginActions.logout();
									localStorage.removeItem('token');
									props.history.push('/login');
								}
							});
					}}
					className="video-delete-button"
				>
					X
				</button>
			)}
			<img
				className="content-list-entry-image"
				onClick={() => MainCategoryActions.changeMainVideo(video)}
				src={video.snippet.thumbnails.default.url}
				alt=""
			/>
			<div
				className="content-list-entry-title"
				onClick={() => MainCategoryActions.changeMainVideo(video)}
			>
				{title}
			</div>
			<div
				className="content-list-entry-description"
				onClick={() => MainCategoryActions.changeMainVideo(video)}
			>
				{description}
			</div>
		</div>
	);
};

// export default ContentListEntry;

ContentListEntry = connect(
	state => ({
		selectedUserCategory: state.changeMainContent.selectedUserCategory,
		isEditing: state.changeMainContent.isEditing
	}),
	dispatch => ({
		MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch),
		LoginActions: bindActionCreators(LoginActions, dispatch)
	})
)(ContentListEntry);

export default withRouter(ContentListEntry);

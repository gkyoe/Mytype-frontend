import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainCategoryActions from '../../modules/changeMainContent';

const ContentListEntry = props => {
	const { MainCategoryActions, video } = props;
	const title = video.snippet.title.substring(0, 18) + '...';
	const description = video.snippet.description.substring(0, 40) + '...';
	return (
		<div className="ContentListEntry">
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

export default connect(null, dispatch => ({
	MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch)
}))(ContentListEntry);

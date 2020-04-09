import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainCategoryActions from '../../modules/changeMainContent';

const MainCategoryEntry = props => {
	return (
		<div className="MainCategoryEntry">
			<button
				onClick={() => props.MainCategoryActions.getVideos(props.id)}
				className="main-category-entry-button"
			>
				{props.category}
			</button>
		</div>
	);
};

// export default MainCategoryEntry;

export default connect(null, dispatch => ({
	MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch)
}))(MainCategoryEntry);

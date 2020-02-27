import React from 'react';
import { connect } from 'react-redux';
import MainContent from './MainContent';
import MainContentDescription from './MainContentDescription';
import './MainContentBox.css';

const MainContentBox = props => {
	const { mainVideo } = props;
	return (
		<div className="MainContentBox">
			<div className="col62 float_left">
				<MainContent mainVideo={mainVideo} />
				<button className="addMyCate margin_right float_right">
					내 카테고리에 추가
				</button>
			</div>
			<div className="col28 float_left">
				<MainContentDescription mainVideo={mainVideo} />
			</div>
		</div>
	);
};

// export default MainContentBox;

export default connect(
	state => ({
		mainVideo: state.changeMainContent.mainVideo
	}),
	null
)(MainContentBox);

import React from 'react';
import MainContent from './MainContent';
import MainContentDescription from './MainContentDescription';
import './MainContentBox.css';

const MainContentBox = () => {
	return (
		<div className="MainContentBox">
			<div className="col62 float_left">
				<MainContent />
				<button className="addMyCate margin_right float_right">
					내 카테고리에 추가
				</button>
			</div>
			<div className="col28 float_left">
				<MainContentDescription />
			</div>
		</div>
	);
};

export default MainContentBox;

import React from 'react';

const MainContentDescription = props => {
	return (
		<div className="MainContentDescription">
			<h3 className="main-title">{props.mainVideo.snippet.title}</h3>
			<div className="main-description">
				{props.mainVideo.snippet.description}
			</div>
		</div>
	);
};

export default MainContentDescription;

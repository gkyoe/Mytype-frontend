import React from 'react';

const MainContentDescription = props => {
	return (
		<div className="MainContentDescription">
			<h3>{props.mainVideo.snippet.title}</h3>
			<div>{props.mainVideo.snippet.description}</div>
		</div>
	);
};

export default MainContentDescription;

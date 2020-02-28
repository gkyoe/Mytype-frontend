import React from 'react';

const MainContent = props => {
	return (
		<div>
			<iframe
				className="iframe"
				src={'https://www.youtube.com/embed/' + props.mainVideo.id.videoId}
				allowFullScreen
			></iframe>
		</div>
	);
};

export default MainContent;

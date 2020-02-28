import React from 'react';
import ContentListEntry from './ContentListEntry';
import './ContentList.css';

const fakeData = [1, 2, 3, 4];

const ContentList = props => {
	const { videoList } = props;
	return (
		<div className="ContentList">
			{videoList.map(x => (
				<ContentListEntry video={x} />
			))}
		</div>
	);
};

export default ContentList;

import React from 'react';
import ContentListEntry from './ContentListEntry';
import './ContentList.css';

const fakeData = [1, 2, 3, 4];

const ContentList = () => {
	return (
		<div className="ContentList">
			{fakeData.map(x => (
				<ContentListEntry />
			))}
		</div>
	);
};

export default ContentList;

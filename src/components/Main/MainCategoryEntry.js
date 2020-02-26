import React from 'react';

const MainCategoryEntry = props => {
	return (
		<div className="MainCategoryEntry">
			<button>{props.category}</button>
		</div>
	);
};

export default MainCategoryEntry;

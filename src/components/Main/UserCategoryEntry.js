import React from 'react';

const UserCategoryEntry = props => {
	return (
		<div className="UserCategoryEntry">
			<button className="user-category-entry-button">{props.category}</button>
		</div>
	);
};

export default UserCategoryEntry;

import React from 'react';
import UserCategoryEntry from './UserCategoryEntry';
import './UserCategory.css';

const categoryList = ['운동할때', '밥먹을때'];

const UserCategory = () => {
	return (
		<div className="UserCategory">
			<h3>나만의 카테고리</h3>
			{categoryList.map(x => (
				<UserCategoryEntry key={categoryList.indexOf(x)} category={x} />
			))}
			<div className="bottom-position">
				<button className="buttonSize">추가</button>
				<button className="buttonSize">삭제</button>
			</div>
		</div>
	);
};

export default UserCategory;

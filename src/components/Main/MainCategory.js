import React from 'react';
import MainCategoryEntry from './MainCategoryEntry';
import './MainCategory.css';

const categoryList = [
	'모태솔로도 헤어지게 만드는 슬픈 노래',
	'내적댄스를 추게하는 신나는 노래',
	'불면증을 치료하는 노래',
	'마음을 쓰담쓰담해주는 노래'
];
const MainCategory = () => {
	return (
		<div className="MainCategory">
			<h3>카테고리</h3>
			{categoryList.map(x => (
				<MainCategoryEntry
					id={categoryList.indexOf(x) + 1}
					key={categoryList.indexOf(x)}
					category={x}
				/>
			))}
		</div>
	);
};

export default MainCategory;

import React from 'react';
import MainCategoryEntry from './MainCategoryEntry';
import './MainCategory.css';

const categoryList = [
	'코로나',
	'브이로그',
	'먹방',
	'여행',
	'넷플릭스 영화추천'
];
const MainCategory = () => {
	return (
		<div className="MainCategory">
			<h3 className="MainCategory-title">추천 카테고리</h3>
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

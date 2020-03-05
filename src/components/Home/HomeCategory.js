import React from 'react';
import HomeCategoryEntry from './HomeCategoryEntry';
import './HomeCategory.css';
import sad from './HomeCategoryImage/sad.jpg';
import dance from './HomeCategoryImage/dance.jpg';
import carmdown from './HomeCategoryImage/carmdown.png';
import comfort from './HomeCategoryImage/comfort.jpeg';

function HomeCategory() {
	const data = [
		{
			id: 1,
			title: '코로나',
			image: sad
		},
		{
			id: 2,
			title: '브이로그',
			image: dance
		},
		{
			id: 3,
			title: '먹방',
			image: carmdown
		},
		{
			id: 4,
			title: '여행',
			image: comfort
		},
		{
			id: 5,
			title: '넷플릭스 영화추천',
			image: comfort
		}
	];

	return (
		<div className="homeCategory">
			<div>
				{data ? (
					data.map(item => (
						<HomeCategoryEntry
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
						/>
					))
				) : (
					<h1>No Content</h1>
				)}
			</div>
		</div>
	);
}

export default HomeCategory;

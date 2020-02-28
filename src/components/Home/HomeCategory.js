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
			title: '모태솔로도 헤어지게 만드는 슬픈노래',
			image: sad
		},
		{
			id: 2,
			title: '내적댄스를 추게하는 신나는 노래',
			image: dance
		},
		{
			id: 3,
			title: '불면증을 치료하는 노래',
			image: carmdown
		},
		{
			id: 4,
			title: '마음을 쓰담쓰담해주는 노래',
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

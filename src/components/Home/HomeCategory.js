import React from 'react';
import HomeCategoryEntry from './HomeCategoryEntry';
import './HomeCategory.css';
import corona from './HomeCategoryImage/corona.png';
import vlog from './HomeCategoryImage/vlog.png';
import eatting from './HomeCategoryImage/eatting.png';
import travel from './HomeCategoryImage/travel.png';
import netflix from './HomeCategoryImage/netflix.png';

function HomeCategory() {
	const data = [
		{
			id: 1,
			title: '코로나',
			image: corona
		},
		{
			id: 2,
			title: '브이로그',
			image: vlog
		},
		{
			id: 3,
			title: '먹방',
			image: eatting
		},
		{
			id: 4,
			title: '여행',
			image: travel
		},
		{
			id: 5,
			title: '넷플릭스 영화추천',
			image: netflix
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

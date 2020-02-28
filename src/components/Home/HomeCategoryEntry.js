import React from 'react';

// recastly의 videoList, videoListEntry 컴포넌트를 불러왔다.
// 데이터베이스에 저장되어 있는 카테고리 목록을 서버에서 받아오면 props로 넘겨준다.
// props의 이름이나 넘어오는 데이터의 속성들을 다시 확인해서 넘겨줘야 한다.
const HomeCategoryEntry = ({ title, image }) => {
	return (
		<div className="home-category-entry">
			<div className="home-category-image">
				<img className="image" src={image} />
			</div>
			<div>
				<div className="title">{title}</div>
			</div>
		</div>
	);
};

export default HomeCategoryEntry;

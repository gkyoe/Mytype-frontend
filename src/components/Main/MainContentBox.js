import React from 'react';
import { connect } from 'react-redux';
import MainContent from './MainContent';
import MainContentDescription from './MainContentDescription';
import './MainContentBox.css';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { UserCategoryListModal } from '../Main';
import * as MainCategoryActions from '../../modules/changeMainContent';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		height: '175px'
	}
};

const MainContentBox = props => {
	const { mainVideo, isUserCategory, MainCategoryActions, isEditing } = props;
	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	// function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	subtitle.style.color = '#f00';
	// }

	function closeModal() {
		setIsOpen(false);
	}
	if (mainVideo === 'nonExist') return <h2>추가한 비디오가 없습니다.</h2>;
	return (
		<div className="MainContentBox">
			<div className="col62 float_left">
				<MainContent mainVideo={mainVideo} />
				{isUserCategory ? (
					isEditing ? (
						<button
							className="addMyCate margin_right float_right"
							onClick={MainCategoryActions.changeIsEditingFalse}
						>
							편집완료
						</button>
					) : (
						<button
							className="addMyCate margin_right float_right"
							onClick={MainCategoryActions.changeIsEditingTrue}
						>
							카테고리 편집
						</button>
					)
				) : (
					<button onClick={openModal} className="addMyCate float_right">
						내 카테고리에 추가
					</button>
				)}
			</div>
			<div className="col28 float_left">
				<MainContentDescription mainVideo={mainVideo} />
			</div>
			<Modal
				isOpen={modalIsOpen}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 className="modal-title">내 카테고리에 추가</h2>
				<UserCategoryListModal mainVideo={mainVideo} closeModal={closeModal} />
			</Modal>
		</div>
	);
};

// export default MainContentBox;

export default connect(
	state => ({
		mainVideo: state.changeMainContent.mainVideo,
		isUserCategory: state.changeMainContent.isUserCategory,
		isEditing: state.changeMainContent.isEditing
	}),
	dispatch => ({
		MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch)
	})
)(MainContentBox);

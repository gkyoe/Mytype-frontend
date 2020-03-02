import React, { Component } from 'react';
import UserCategoryEntry from './UserCategoryEntry';
import './UserCategory.css';
import Modal from 'react-modal';
import { ModalBox } from '../Main';

const categoryList = ['운동할때', '밥먹을때'];
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		height: '200px'
	}
};

function UserCategory() {
	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="UserCategory">
			<h3>나만의 카테고리</h3>
			{categoryList.map(x => (
				<UserCategoryEntry key={categoryList.indexOf(x)} category={x} />
			))}
			<div className="bottom-position">
				<button onClick={openModal} className="buttonSize">
					추가
				</button>
				<button className="buttonSize">삭제</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref={_subtitle => (subtitle = _subtitle)}>카테고리추가</h2>
				<ModalBox closeModal={closeModal} />
			</Modal>
		</div>
	);
}

/*
class UserCategory extends Component {
	render() {
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
	}
}
*/

export default UserCategory;

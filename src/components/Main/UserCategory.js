import React from 'react';
import './UserCategory.css';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalBox } from '../Main';
import UserCategoryEntry from './UserCategoryEntry';
import * as ChangeModalStateActions from '../../modules/changeModalState';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		height: '120px'
	}
};

function UserCategory(props) {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="UserCategory">
			<h3 className="UserCategory-title">나만의 카테고리</h3>
			{props.userCategoryList.map(x => (
				<UserCategoryEntry
					key={props.userCategoryList.indexOf(x)}
					category={x}
				/>
			))}
			<div className="bottom-position">
				<button onClick={openModal} className="buttonSize">
					추가
				</button>
				<button
					onClick={() => {
						props.ChangeModalStateActions.toTrue();
						openModal();
					}}
					className="buttonSize"
				>
					삭제
				</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<ModalBox isDeleteModal={props.isDeleteModal} closeModal={closeModal} />
			</Modal>
		</div>
	);
}

export default connect(
	state => ({
		userCategoryList: state.userCategoryData.userCategoryList,
		isDeleteModal: state.changeModalState.isDeleteModal
	}),
	dispatch => ({
		ChangeModalStateActions: bindActionCreators(
			ChangeModalStateActions,
			dispatch
		)
	})
)(UserCategory);

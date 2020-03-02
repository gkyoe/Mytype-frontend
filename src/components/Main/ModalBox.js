import React, { Component } from 'react';

class ModalBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
	}

	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value });
	};

	render() {
		return (
			<div className="modal">
				<input
					className="category-name-input"
					placeholder="카테고리명을 입력해주세요"
					onChange={this.handleInputValue('inputValue')}
				></input>
				<button className="modal-button" onClick={this.props.closeModal}>
					추가
				</button>
				<button className="modal-button" onClick={this.props.closeModal}>
					닫기
				</button>
			</div>
		);
	}
}

export default ModalBox;

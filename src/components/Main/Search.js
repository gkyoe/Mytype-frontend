import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainCategoryActions from '../../modules/changeMainContent';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.handleInputValue = this.handleInputValue.bind(this);
	}

	handleInputValue(value) {
		this.setState({
			inputValue: value
		});
	}

	render() {
		const data = {
			searchValue: this.state.inputValue
		};
		return (
			<div className="search-box">
				<input
					className="search-input"
					placeholder="검색어를 입력해주세요"
					value={this.state.inputValue}
					onChange={e => this.handleInputValue(e.target.value)}
				/>
				<button
					className="search-button"
					onClick={() => {
						this.props.MainCategoryActions.postSearchData(data);
					}}
				>
					검색
				</button>
			</div>
		);
	}
}

export default connect(null, dispatch => ({
	MainCategoryActions: bindActionCreators(MainCategoryActions, dispatch)
}))(Search);

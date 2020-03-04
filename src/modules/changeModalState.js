import { handleActions } from 'redux-actions';

const CHANGE_DELETE_MODAL_TO_TRUE = 'CHANGE_DELETE_MODAL_TO_TRUE';
const CHANGE_DELETE_MODAL_TO_FALSE = 'CHANGE_DELETE_MODAL_TO_FALSE';

const initialState = {
	isDeleteModal: false
};

export const toTrue = () => dispatch => {
	return dispatch({
		type: CHANGE_DELETE_MODAL_TO_TRUE
	});
};

export const toFalse = () => dispatch => {
	return dispatch({
		type: CHANGE_DELETE_MODAL_TO_FALSE
	});
};

export default handleActions(
	{
		[CHANGE_DELETE_MODAL_TO_TRUE]: (state, action) => {
			return {
				...state,
				isDeleteModal: true
			};
		},
		[CHANGE_DELETE_MODAL_TO_FALSE]: (state, action) => {
			return {
				...state,
				isDeleteModal: false
			};
		}
	},
	initialState
);

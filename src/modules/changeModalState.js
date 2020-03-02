import { handleActions } from 'redux-actions';

const MODAL_STATE_ON = 'MODAL_STATE_ON';
const MODAL_STATE_OFF = 'MODAL_STATE_OFF';

const initialState = {
	modalOn: false,
	modalType: null
};

export const modalOn = type => dispatch => {
	return dispatch({
		type: MODAL_STATE_ON,
		payload: type
	});
};

export const modalOff = () => dispatch => {
	return dispatch({
		type: MODAL_STATE_OFF
	});
};

export default handleActions(
	{
		[MODAL_STATE_ON]: (state, action) => {
			return {
				...state,
				modalOn: true,
				modalType: action.payload
			};
		},
		[MODAL_STATE_OFF]: (state, action) => {
			return {
				...state,
				modalOn: false
			};
		}
	},
	initialState
);

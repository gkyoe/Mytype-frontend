import { handleActions } from 'redux-actions';

const CHANGE_MAIN_CONTENT = 'CHANGE_MAIN_CONTENT';

const initialState = {
	mainVideo: null,
	videoList: null
};

export default handleActions(
	{
		[CHANGE_MAIN_CONTENT]: (state, action) => {
			return {
				...state,
				mainVideo: action.payload
			};
		}
	},
	initialState
);

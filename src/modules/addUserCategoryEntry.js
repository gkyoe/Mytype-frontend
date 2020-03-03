import { handleActions } from 'redux-actions';
import axios from 'axios';

const ADD_USER_CATEGORY = 'ADD_USER_CATEGORY';

const initialState = {
	categoryName: 'NULL'
};
function AddUserCategoryAPI(data) {
	return axios.post(`http://localhost:3001/user/addCategory/`, data);
}

export const addUserCategoryEntry = data => dispatch => {
	return AddUserCategoryAPI(data).then(result =>
		dispatch({
			type: ADD_USER_CATEGORY
		})
	);
};

export default handleActions(
	{
		[ADD_USER_CATEGORY]: (state, action) => {
			return {
				...state
			};
		}
	},
	initialState
);
